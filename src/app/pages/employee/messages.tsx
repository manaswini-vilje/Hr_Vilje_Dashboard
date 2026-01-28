import { useState } from 'react';
import { Send, Paperclip, Search, Phone, Video, MoreVertical } from 'lucide-react';
import Sidebar from '@/app/components/sidebar/Sidebar';
import Header from '@/app/components/layout/header';
import { Card, CardContent } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Avatar } from '@/app/components/ui/avatar';

export default function EmployeeMessages() {
  const [messageText, setMessageText] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'Sarah Miller',
      role: 'People Operations',
      avatar: 'SM',
      lastMessage: 'I\'ll review your documents by tomorrow.',
      time: '2 mins ago',
      unread: 2,
      online: true,
    },
    {
      id: 2,
      name: 'HR Team',
      role: 'General Support',
      avatar: 'HR',
      lastMessage: 'Welcome to the team!',
      time: '1 hour ago',
      unread: 0,
      online: false,
    },
    {
      id: 3,
      name: 'Benefits Department',
      role: 'Benefits & Compensation',
      avatar: 'BD',
      lastMessage: 'Your health insurance is now active.',
      time: '2 days ago',
      unread: 0,
      online: false,
    },
  ];

  const messages = [
    {
      id: 1,
      sender: 'me',
      text: 'Hi Sarah, I have a question about the document upload process.',
      time: '10:30 AM',
    },
    {
      id: 2,
      sender: 'Sarah Miller',
      text: 'Hi Alex! Of course, I\'m here to help. What do you need assistance with?',
      time: '10:32 AM',
    },
    {
      id: 3,
      sender: 'me',
      text: 'I uploaded my ID documents yesterday, but I\'m not sure if they went through successfully. Can you check the status?',
      time: '10:33 AM',
    },
    {
      id: 4,
      sender: 'Sarah Miller',
      text: 'Let me check that for you right now. I can see your documents were received and are currently under review.',
      time: '10:35 AM',
    },
    {
      id: 5,
      sender: 'Sarah Miller',
      text: 'Everything looks good! I\'ll review your documents by tomorrow and update the status in your dashboard.',
      time: '10:36 AM',
    },
    {
      id: 6,
      sender: 'me',
      text: 'That\'s great, thank you so much for checking!',
      time: '10:37 AM',
    },
  ];

  const handleSend = () => {
    if (messageText.trim()) {
      // Send message logic here
      setMessageText('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header userName="Alex Johnson" userRole="Product Designer" />
        
        <main className="flex-1 overflow-hidden p-6">
          {/* Breadcrumb */}
          <div className="mb-4">
            <p className="text-sm text-gray-500">Dashboard / Messages</p>
          </div>

          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-semibold text-gray-900">Messages</h1>
            <p className="text-gray-500 mt-1">Chat with HR and get support</p>
          </div>

          <Card className="h-[calc(100vh-16rem)]">
            <CardContent className="p-0 h-full">
              <div className="flex h-full">
                {/* Conversations List */}
                <div className="w-80 border-r border-gray-200 flex flex-col">
                  {/* Search */}
                  <div className="p-4 border-b border-gray-200">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        placeholder="Search conversations..."
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {/* Conversation List */}
                  <div className="flex-1 overflow-y-auto">
                    {conversations.map((conv) => (
                      <button
                        key={conv.id}
                        className={`w-full p-4 flex items-start gap-3 hover:bg-gray-50 transition-colors border-b border-gray-100 ${
                          conv.id === 1 ? 'bg-blue-50' : ''
                        }`}
                      >
                        <div className="relative">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-medium">
                            {conv.avatar}
                          </div>
                          {conv.online && (
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0 text-left">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-semibold text-gray-900 text-sm truncate">
                              {conv.name}
                            </h4>
                            <span className="text-xs text-gray-500">{conv.time}</span>
                          </div>
                          <p className="text-xs text-gray-500 mb-1">{conv.role}</p>
                          <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
                        </div>
                        {conv.unread > 0 && (
                          <div className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">{conv.unread}</span>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 flex flex-col">
                  {/* Chat Header */}
                  <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-medium">
                          SM
                        </div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Sarah Miller</h3>
                        <p className="text-xs text-green-600">Online</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Phone className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Video className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-md ${
                            msg.sender === 'me'
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 text-gray-900'
                          } rounded-lg px-4 py-2`}
                        >
                          {msg.sender !== 'me' && (
                            <p className="text-xs font-semibold mb-1">{msg.sender}</p>
                          )}
                          <p className="text-sm">{msg.text}</p>
                          <p
                            className={`text-xs mt-1 ${
                              msg.sender === 'me' ? 'text-blue-100' : 'text-gray-500'
                            }`}
                          >
                            {msg.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <div className="p-4 border-t border-gray-200">
                    <div className="flex items-end gap-2">
                      <Button variant="outline" size="icon" className="flex-shrink-0">
                        <Paperclip className="w-4 h-4" />
                      </Button>
                      <Textarea
                        placeholder="Type your message..."
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="flex-1 min-h-[44px] max-h-32 resize-none"
                        rows={1}
                      />
                      <Button
                        onClick={handleSend}
                        className="bg-blue-600 hover:bg-blue-700 flex-shrink-0"
                        size="icon"
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Press Enter to send, Shift + Enter for new line
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
