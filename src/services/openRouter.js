import { getSystemPrompt, searchKnowledge } from '../data/companyKnowledge.js';

class OpenRouterService {
  constructor() {
    this.apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
    this.baseUrl = 'https://openrouter.ai/api/v1/chat/completions';
    this.siteUrl = import.meta.env.VITE_SITE_URL || window.location.origin;
    this.siteName = import.meta.env.VITE_SITE_NAME || 'ZenAegis';
    this.systemPrompt = getSystemPrompt();
  }

  async sendMessage(messages, model = 'meta-llama/llama-4-maverick:free') {
    if (!this.apiKey) {
      throw new Error('OpenRouter API key not configured. Please set VITE_OPENROUTER_API_KEY in your environment variables.');
    }

    try {
      // Prepare messages with system prompt
      const systemMessage = {
        role: 'system',
        content: this.systemPrompt
      };

      // Search for relevant company knowledge based on the latest user message
      const latestUserMessage = messages.filter(msg => msg.role === 'user').pop();
      let enhancedMessages = [systemMessage, ...messages];
      
      if (latestUserMessage) {
        const knowledgeResults = searchKnowledge(latestUserMessage.content);
        if (knowledgeResults.length > 0) {
          // Add relevant knowledge as context
          const knowledgeContext = knowledgeResults.map(result => {
            if (result.type === 'service') {
              return `Service: ${result.data.name}\nDescription: ${result.data.description}\nDetails: ${result.data.details.join(', ')}`;
            } else if (result.type === 'faq') {
              return `FAQ: ${result.data.question}\nAnswer: ${result.data.answer}`;
            }
            return '';
          }).join('\n\n');
          
          if (knowledgeContext) {
            enhancedMessages.splice(-1, 0, {
              role: 'system',
              content: `Relevant ZenAegis information for this query:\n\n${knowledgeContext}`
            });
          }
        }
      }

      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'HTTP-Referer': this.siteUrl,
          'X-Title': this.siteName,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model,
          messages: enhancedMessages.map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`API request failed: ${response.status} ${response.statusText}${errorData.error ? ` - ${errorData.error.message}` : ''}`);
      }

      const data = await response.json();
      return data.choices[0]?.message?.content || 'No response received';
    } catch (error) {
      console.error('OpenRouter API Error:', error);
      throw new Error(`Failed to get AI response: ${error.message}`);
    }
  }

  // Method to handle image + text messages
  async sendMessageWithImage(text, imageUrl, model = 'meta-llama/llama-4-maverick:free') {
    const messages = [{
      role: 'user',
      content: [
        {
          type: 'text',
          text: text
        },
        {
          type: 'image_url',
          image_url: {
            url: imageUrl
          }
        }
      ]
    }];

    return this.sendMessage(messages, model);
  }

  // Get available models (you can extend this to call the models endpoint)
  getAvailableModels() {
    return [
      { id: 'meta-llama/llama-4-maverick:free', name: 'Llama 4 Maverick (Free)' },
      { id: 'anthropic/claude-3.7-sonnet', name: 'Claude 3.7 Sonnet' },
      { id: 'openai/gpt-4', name: 'GPT-4' },
      { id: 'google/gemini-2.5-pro', name: 'Gemini 2.5 Pro' }
    ];
  }
}

export default new OpenRouterService();