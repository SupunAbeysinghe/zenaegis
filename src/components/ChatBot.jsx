import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageSquare, Send, Bot, User, Loader2, X, Minimize2, Maximize2, Zap, Trash2 } from 'lucide-react';
import openRouterService from '@/services/openRouter';

const ChatBot = () => {
  // Load messages from localStorage or use default welcome message
  const getInitialMessages = () => {
    const savedMessages = localStorage.getItem('zenaegis-chat-messages');
    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages);
        return parsed.map(msg => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }));
      } catch (error) {
        console.error('Error loading chat messages from localStorage:', error);
      }
    }
    return [
      {
        id: 1,
        role: 'assistant',
        content: '🛡️ **Security Protocol Initiated** 🛡️\n\nGreetings! I\'m the ZenAegis AI Assistant, your dedicated cybersecurity specialist. I\'m here to help you with:\n\n• **Threat Detection** & AI-powered monitoring\n• **Vulnerability Assessment** & Penetration Testing\n• **Security Consulting** & compliance guidance\n• **Security Training** programs\n• **Mobile App Security** audits\n\nI can answer questions about our services, security best practices, or help you understand how ZenAegis can protect your digital assets.\n\n**How can I secure your peace of mind today?** 🔒',
        timestamp: new Date()
      }
    ];
  };

  const [messages, setMessages] = useState(getInitialMessages);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [error, setError] = useState(null);
  const [showQuickMessages, setShowQuickMessages] = useState(false);
  const [typingMessageId, setTypingMessageId] = useState(null);
  const [typingText, setTypingText] = useState('');
  
  const scrollAreaRef = useRef(null);
  const inputRef = useRef(null);
  const typingTimeoutRef = useRef(null);

  const quickMessages = [
    "What services does ZenAegis offer?",
    "How does your threat detection work?",
    "Do you work with small businesses?",
    "What about mobile app security?",
    "How quickly can you respond to incidents?",
    "Tell me about your penetration testing"
  ];

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const viewport = scrollAreaRef.current.querySelector('[data-slot="scroll-area-viewport"]');
      if (viewport) {
        // Use smooth scrolling for better UX
        viewport.scrollTo({
          top: viewport.scrollHeight,
          behavior: 'smooth'
        });
        
        // Fallback for browsers that don't support smooth scrolling
        setTimeout(() => {
          viewport.scrollTop = viewport.scrollHeight;
        }, 50);
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-scroll during typing effect
  useEffect(() => {
    if (typingMessageId && typingText) {
      scrollToBottom();
    }
  }, [typingText, typingMessageId]);

  // Save messages to localStorage whenever messages change
  useEffect(() => {
    try {
      localStorage.setItem('zenaegis-chat-messages', JSON.stringify(messages));
    } catch (error) {
      console.error('Error saving chat messages to localStorage:', error);
    }
  }, [messages]);

  // Function to format bold text (content within double asterisks)
  const formatMessageContent = (content) => {
    // Split content by double asterisks and create JSX with bold formatting
    const parts = content.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, index) => {
      // Every odd index is content that was inside double asterisks
      if (index % 2 === 1) {
        return <strong key={index}>{part}</strong>;
      }
      return part;
    });
  };

  // Typing effect function
  const typeMessage = (messageId, fullText, callback) => {
    let currentIndex = 0;
    setTypingMessageId(messageId);
    setTypingText('');
    
    const typeChar = () => {
      if (currentIndex < fullText.length) {
        setTypingText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
        typingTimeoutRef.current = setTimeout(typeChar, 30); // Adjust speed here (30ms per character)
      } else {
        setTypingMessageId(null);
        setTypingText('');
        callback();
      }
    };
    
    typeChar();
  };

  // Clean up typing effect on unmount
  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, []);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      // Prepare message history for API
      const messageHistory = [...messages, userMessage].map(msg => ({
        role: msg.role,
        content: msg.content
      }));

      const response = await openRouterService.sendMessage(messageHistory);
      
      const assistantMessageId = Date.now() + 1;
      const assistantMessage = {
        id: assistantMessageId,
        role: 'assistant',
        content: '', // Start with empty content
        timestamp: new Date(),
        isTyping: true
      };

      // Add the message with empty content first
      setMessages(prev => [...prev, assistantMessage]);
      
      // Scroll to show the new typing message
      setTimeout(() => scrollToBottom(), 100);
      
      // Start typing effect
      typeMessage(assistantMessageId, response, () => {
        // When typing is complete, update the message with full content
        setMessages(prev => prev.map(msg => 
          msg.id === assistantMessageId 
            ? { ...msg, content: response, isTyping: false }
            : msg
        ));
      });
    } catch (error) {
      console.error('Chat error:', error);
      setError(error.message);
      
      // Clear any ongoing typing effect
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
      setTypingMessageId(null);
      setTypingText('');
      
      const errorMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: 'I apologize, but I encountered an error while processing your request. Please try again.',
        timestamp: new Date(),
        isError: true
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const clearError = () => {
    setError(null);
  };

  const handleQuickMessage = (message) => {
    setInput(message);
    setShowQuickMessages(false);
    inputRef.current?.focus();
  };

  const clearChatHistory = () => {
    // Clear any ongoing typing effect
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    setTypingMessageId(null);
    setTypingText('');
    
    const welcomeMessage = {
      id: 1,
      role: 'assistant',
      content: '🛡️ **Security Protocol Initiated** 🛡️\n\nGreetings! I\'m the ZenAegis AI Assistant, your dedicated cybersecurity specialist. I\'m here to help you with:\n\n• **Threat Detection** & AI-powered monitoring\n• **Vulnerability Assessment** & Penetration Testing\n• **Security Consulting** & compliance guidance\n• **Security Training** programs\n• **Mobile App Security** audits\n\nI can answer questions about our services, security best practices, or help you understand how ZenAegis can protect your digital assets.\n\n**How can I secure your peace of mind today?** 🔒',
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
    setError(null);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="rounded-full shadow-lg hover:shadow-xl transition-all duration-200 bg-primary hover:bg-primary/90"
        >
          <MessageSquare className="h-6 w-6 mr-2" />
          Chat with AI
        </Button>
      </div>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'}`}>
      <Card className="w-full h-full shadow-2xl border-2">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg">ZenAegis AI</CardTitle>
            </div>
            <div className="flex items-center space-x-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={clearChatHistory}
                title="Clear chat history"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => setIsMinimized(!isMinimized)}
              >
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          {error && (
            <div className="bg-destructive/10 text-destructive text-sm p-2 rounded-md flex items-center justify-between">
              <span>{error}</span>
              <Button variant="ghost" size="sm" onClick={clearError}>
                <X className="h-3 w-3" />
              </Button>
            </div>
          )}
        </CardHeader>

        {!isMinimized && (
          <>
            <CardContent className="flex-1 p-0">
              <ScrollArea ref={scrollAreaRef} className="h-[400px] px-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-3 ${
                        message.role === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div
                        className={`flex gap-2 max-w-[85%] ${
                          message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                        }`}
                      >
                        <div
                          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                            message.role === 'user'
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted text-muted-foreground'
                          }`}
                        >
                          {message.role === 'user' ? (
                            <User className="h-4 w-4" />
                          ) : (
                            <Bot className="h-4 w-4" />
                          )}
                        </div>
                        <div
                          className={`rounded-lg p-3 ${
                            message.role === 'user'
                              ? 'bg-primary text-primary-foreground'
                              : message.isError
                              ? 'bg-destructive/10 text-destructive border border-destructive/20'
                              : 'bg-muted text-muted-foreground'
                          }`}
                        >
                          <div className="text-sm whitespace-pre-wrap">
                            {message.id === typingMessageId && typingText ? (
                              <>
                                {formatMessageContent(typingText)}
                                <span className="animate-pulse">|</span>
                              </>
                            ) : (
                              formatMessageContent(message.content)
                            )}
                          </div>
                          <div className="text-xs opacity-70 mt-1">
                            {formatTime(message.timestamp)}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex gap-3 justify-start">
                      <div className="flex gap-2 max-w-[85%]">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-muted text-muted-foreground">
                          <Bot className="h-4 w-4" />
                        </div>
                        <div className="bg-muted text-muted-foreground rounded-lg p-3">
                          <div className="flex items-center gap-2">
                            <Loader2 className="h-4 w-4 animate-spin" />
                            <span className="text-sm">Thinking...</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>
            </CardContent>

            <CardFooter className="pt-4 space-y-3">
              {/* Quick Messages */}
              {showQuickMessages && (
                <div className="w-full space-y-2">
                  <div className="text-xs text-muted-foreground font-mono flex items-center gap-2">
                    <Zap className="h-3 w-3" />
                    QUICK QUERIES
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {quickMessages.map((message, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        size="sm"
                        className="text-left justify-start h-auto py-2 px-3 text-xs hover:bg-cyber-green/10 hover:text-cyber-green border border-transparent hover:border-cyber-green/30"
                        onClick={() => handleQuickMessage(message)}
                      >
                        {message}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex gap-2 w-full">
                <Button
                  variant="ghost"
                  size="icon"
                  className="flex-shrink-0"
                  onClick={() => setShowQuickMessages(!showQuickMessages)}
                  title="Quick messages"
                >
                  <Zap className={`h-4 w-4 ${showQuickMessages ? 'text-cyber-green' : ''}`} />
                </Button>
                <Input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  size="icon"
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </CardFooter>
          </>
        )}
      </Card>
    </div>
  );
};

export default ChatBot;