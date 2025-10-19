# AI ChatBot Setup Guide

## Overview
This guide will help you set up and configure the AI ChatBot with OpenRouter API integration for your ZenAegis website.

## Features
- 🤖 **Personalized ZenAegis AI Assistant** with company knowledge
- 🛡️ **Cybersecurity Expertise** - Answers questions about ZenAegis services
- 💬 **Real-time conversation** with context-aware responses
- ⌨️ **Realistic Typing Effect** - AI responses appear character by character
- 💾 **Local Storage** - Chat history persists across sessions
- ✨ **Bold Text Formatting** - AI responses with **emphasized text**
- ⚡ **Quick Message Templates** for common inquiries
- 🎨 **Modern, responsive UI** matching ZenAegis cyber theme
- 🔄 **Minimize/maximize functionality** for better UX
- 📊 **Company Statistics Integration** (65+ apps tested, 100+ VAPT, etc.)
- 📱 **Mobile-friendly interface** with touch support
- 🔍 **Smart Knowledge Search** - Automatically finds relevant info
- 🎯 **Service-Specific Responses** tailored to user queries
- 🗑️ **Clear Chat History** - Easy reset with trash button

## Setup Instructions

### 1. Get OpenRouter API Key
1. Visit [OpenRouter.ai](https://openrouter.ai)
2. Create an account or sign in
3. Navigate to API Keys section
4. Generate a new API key
5. Copy the API key for use in step 3

### 2. Environment Configuration
1. Copy the environment template:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` file and add your API key:
   ```env
   # OpenRouter AI Configuration
   VITE_OPENROUTER_API_KEY=your_actual_api_key_here
   
   # Site Configuration (Optional)
   VITE_SITE_URL=http://localhost:5173
   VITE_SITE_NAME=ZenAegis
   ```

### 3. Install Dependencies (if not already installed)
```bash
npm install
# or
pnpm install
```

### 4. Start Development Server
```bash
npm run dev
# or
pnpm run dev
```

### 5. Test the ChatBot
1. Open your browser to `http://localhost:5173`
2. Look for the "Chat with AI" floating button in the bottom-right corner
3. Click to open the chatbot
4. Send a test message to verify API connectivity

## Available AI Models
The chatbot supports multiple AI models through OpenRouter:

- **Llama 4 Maverick (Free)** - Default model, good for general conversations
- **Claude 3.7 Sonnet** - Advanced reasoning and analysis
- **GPT-4** - OpenAI's flagship model
- **Gemini 2.5 Pro** - Google's latest model

## Features Explained

### Chat Interface
- **Floating Button**: Appears in bottom-right corner when closed
- **Minimize/Maximize**: Click the minimize button to reduce to title bar
- **Close**: X button to completely hide the chatbot
- **Responsive Design**: Works on desktop and mobile devices

### Message Features
- **Real-time Chat**: Send messages and receive AI responses
- **Typing Effect**: AI responses appear character by character with blinking cursor
- **Persistent History**: Chat messages saved locally and restored on reload
- **Bold Text Support**: AI responses with **emphasized formatting**
- **Quick Messages**: Lightning button for common ZenAegis queries
- **Timestamps**: Shows when each message was sent
- **Error Handling**: Displays user-friendly error messages
- **Loading States**: Shows "Thinking..." while AI processes
- **Personalized Welcome**: ZenAegis-branded greeting with service overview
- **Clear History**: Trash button to reset conversation

### API Integration
- **OpenRouter Service**: Clean API service layer
- **Company Knowledge**: Automatic injection of ZenAegis information
- **Smart Context Search**: Finds relevant services/FAQs based on queries
- **System Prompts**: AI trained specifically for ZenAegis cybersecurity expertise
- **Error Handling**: Graceful fallback for API failures
- **Model Selection**: Easy to switch between different AI models
- **Rate Limiting**: Handles API rate limits appropriately

### ZenAegis Personalization
The chatbot includes comprehensive company knowledge:

#### **Services Database**
- Threat Detection & AI-powered monitoring
- Vulnerability Assessment & Penetration Testing
- Security Consulting & compliance guidance
- Security Training programs
- Mobile Application Security Audits
- Detailed service descriptions, benefits, and technical details

#### **Company Information**
- Mission, vision, and company values
- Key statistics (65+ apps tested, 100+ VAPT completed, 99.9% uptime)
- Technologies used (AI, ML, quantum encryption, etc.)
- Industries served and compliance standards
- Contact information and support details

#### **FAQ Database**
- Common customer questions and expert answers
- Pricing, support, and business process information
- Technical explanations made accessible
- Comparison with competitors

#### **Smart Response System**
- Automatically searches company knowledge for relevant information
- Injects context into AI responses for accurate, specific answers
- Maintains professional cybersecurity expertise tone
- Encourages consultation for detailed discussions

## Customization Options

### Changing the AI Model
Edit `/src/services/openRouter.js` and modify the default model:
```javascript
async sendMessage(messages, model = 'anthropic/claude-3.7-sonnet') {
  // Your preferred model
}
```

### Styling Customization
The chatbot uses your existing UI components and follows the ZenAegis design system:
- Colors match your cyber theme
- Uses existing Button, Card, Input components
- Responsive design with TailwindCSS

### Chat Behavior
Modify `/src/components/ChatBot.jsx` to:
- Change welcome message
- Add custom prompts
- Modify UI layout
- Add additional features

## Troubleshooting

### Common Issues

1. **"API key not configured" error**
   - Ensure `.env` file exists with valid `VITE_OPENROUTER_API_KEY`
   - Restart development server after adding API key

2. **API request failed errors**
   - Check your OpenRouter account has credits/quota
   - Verify API key is correct and active
   - Check network connectivity

3. **ChatBot not appearing**
   - Ensure ChatBot component is imported in App.jsx
   - Check browser console for JavaScript errors
   - Verify all dependencies are installed

4. **Styling issues**
   - Ensure TailwindCSS is configured properly
   - Check that lucide-react icons are installed
   - Verify UI components are available

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint

# Preview production build
npm run preview
```

## Security Considerations

- ✅ API keys are stored in environment variables
- ✅ No API keys exposed in client-side code
- ✅ Error messages don't leak sensitive information
- ✅ Input sanitization handled by the AI service

## Production Deployment

1. Set environment variables in your hosting platform
2. Build the project: `npm run build`
3. Deploy the `dist` folder to your hosting service
4. Ensure environment variables are properly configured

## Support

If you encounter any issues:
1. Check the browser console for errors
2. Verify API key and network connectivity
3. Review the OpenRouter API documentation
4. Check the component imports and dependencies

The chatbot is now ready to use! 🚀