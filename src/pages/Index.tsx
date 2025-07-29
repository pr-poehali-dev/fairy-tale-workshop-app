import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function Index() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Привет! Я волшебный сочинитель сказок! 🧚‍♀️ Давай создадим для твоего малыша удивительную историю! Для начала скажи мне - для кого сказка? Как зовут ребёнка и сколько ему лет?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const sendMessage = () => {
    if (inputValue.trim()) {
      const userMessage: Message = {
        id: Date.now().toString(),
        text: inputValue,
        sender: 'user',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, userMessage]);
      setInputValue('');
      
      // Симуляция ответа бота
      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: 'Замечательно! Теперь расскажи, какой персонаж будет главным героем сказки? Может быть, волшебная принцесса, отважный рыцарь, милый дракончик или кто-то ещё?',
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-golden/20 via-fairy-green/20 to-enchanted-purple/20">
      {/* Фоновое изображение */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: `url('/img/ace7801e-687c-408b-9f9b-017ae7e0d781.jpg')`
        }}
      />
      
      {/* Анимированные феи */}
      <div className="absolute top-20 left-10 text-2xl animate-fairy-float">🧚‍♀️</div>
      <div className="absolute top-32 right-20 text-xl animate-fairy-float" style={{animationDelay: '1s'}}>✨</div>
      <div className="absolute bottom-32 left-20 text-lg animate-sparkle">🌟</div>
      <div className="absolute top-40 left-1/3 text-xl animate-fairy-float" style={{animationDelay: '2s'}}>🦋</div>
      <div className="absolute bottom-20 right-10 text-2xl animate-sparkle" style={{animationDelay: '0.5s'}}>🧚‍♂️</div>

      {/* Контентная область */}
      <div className="relative z-10 flex flex-col h-screen">
        {/* Шапка с навигацией */}
        <header className="px-8 py-6">
          <div className="flex justify-center items-center gap-8">
            <h1 className="font-caveat text-4xl font-bold text-enchanted-purple drop-shadow-lg mr-8">
              Мастерская сказок
            </h1>
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                className="bg-white/80 hover:bg-white/90 text-enchanted-purple border-enchanted-purple font-sans font-medium"
              >
                <Icon name="BookOpen" size={18} className="mr-2" />
                Твои сказки
              </Button>
              <Button 
                className="bg-magical-pink hover:bg-magical-pink/90 text-white font-sans font-medium"
              >
                <Icon name="ShoppingCart" size={18} className="mr-2" />
                Заказать книгу
              </Button>
              <Button 
                variant="outline"
                className="bg-fairy-green/20 hover:bg-fairy-green/30 text-enchanted-purple border-fairy-green font-sans font-medium"
              >
                <Icon name="MessageCircle" size={18} className="mr-2" />
                Телеграм
              </Button>
            </div>
          </div>
        </header>

        {/* Основная область с диалогом */}
        <main className="flex-1 flex justify-center items-center px-8 pb-8">
          <Card className="w-full max-w-4xl h-[600px] bg-white/95 backdrop-blur-sm shadow-2xl border-0">
            <CardContent className="p-6 h-full flex flex-col">
              {/* Заголовок чата */}
              <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                <div className="w-10 h-10 bg-gradient-to-r from-magical-pink to-enchanted-purple rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">🧚‍♀️</span>
                </div>
                <div>
                  <h2 className="font-caveat text-2xl font-semibold text-enchanted-purple">
                    Волшебный сочинитель
                  </h2>
                  <p className="text-sm text-gray-500 font-sans">Создаём сказки вместе</p>
                </div>
              </div>

              {/* Область сообщений */}
              <ScrollArea className="flex-1 mt-4 mb-4">
                <div className="space-y-4 pr-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                          message.sender === 'user'
                            ? 'bg-gradient-to-r from-magical-pink to-enchanted-purple text-white'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        <p className="font-sans text-sm leading-relaxed">{message.text}</p>
                        <span className={`text-xs mt-1 block ${
                          message.sender === 'user' ? 'text-white/70' : 'text-gray-500'
                        }`}>
                          {message.timestamp.toLocaleTimeString('ru-RU', { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              {/* Поле ввода */}
              <div className="flex gap-3 pt-4 border-t border-gray-200">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Напиши свой ответ..."
                  className="flex-1 font-sans border-gray-300 focus:border-magical-pink focus:ring-magical-pink/20"
                />
                <Button 
                  onClick={sendMessage}
                  className="bg-gradient-to-r from-magical-pink to-enchanted-purple hover:from-magical-pink/90 hover:to-enchanted-purple/90 text-white px-6"
                >
                  <Icon name="Send" size={18} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}