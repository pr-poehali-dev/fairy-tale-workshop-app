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
    <div className="min-h-screen relative overflow-hidden">
      {/* Фоновое изображение мастерской */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/img/fb27f1b9-950f-4215-9397-d5f6133930b4.jpg')`
        }}
      />
      
      {/* Полупрозрачная накладка для читаемости */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-fairy-green/10 to-magical-pink/20" />
      
      {/* Красивая надпись "Мастерская сказок" */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
        <h1 className="font-caveat text-6xl font-bold text-enchanted-purple drop-shadow-2xl animate-sparkle">
          Мастерская сказок
        </h1>
      </div>
      
      {/* Анимированные магические элементы */}
      <div className="absolute top-20 left-10 text-3xl animate-fairy-float">🧚‍♀️</div>
      <div className="absolute top-32 right-20 text-2xl animate-fairy-float" style={{animationDelay: '1s'}}>✨</div>
      <div className="absolute bottom-32 left-20 text-2xl animate-sparkle">🌟</div>
      <div className="absolute top-40 left-1/4 text-2xl animate-fairy-float" style={{animationDelay: '2s'}}>🦋</div>
      <div className="absolute bottom-20 right-10 text-3xl animate-sparkle" style={{animationDelay: '0.5s'}}>🧚‍♂️</div>
      <div className="absolute top-60 right-1/4 text-xl animate-fairy-float" style={{animationDelay: '1.5s'}}>🐉</div>
      <div className="absolute bottom-40 left-1/3 text-2xl animate-sparkle" style={{animationDelay: '2.5s'}}>🦄</div>
      <div className="absolute top-80 left-16 text-lg animate-fairy-float" style={{animationDelay: '3s'}}>🌈</div>
      <div className="absolute bottom-60 right-20 text-xl animate-sparkle" style={{animationDelay: '1.2s'}}>⭐</div>

      {/* Контентная область */}
      <div className="relative z-10 flex flex-col h-screen pt-32">
        {/* Шапка с навигацией */}
        <header className="px-8 pb-6">
          <div className="flex justify-center items-center gap-6">
            <div className="relative group">
              <Button 
                variant="outline" 
                className="bg-white/90 hover:bg-white text-enchanted-purple border-2 border-enchanted-purple font-sans font-semibold text-lg px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Icon name="BookOpen" size={20} className="mr-3" />
                Твои сказки
              </Button>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-3 bg-white/95 backdrop-blur-sm text-gray-800 text-sm rounded-xl shadow-xl border border-enchanted-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50 w-80">
                <div className="font-semibold text-enchanted-purple mb-1">📖 Твои сказки</div>
                <div className="text-xs leading-relaxed">
                  Это твой личный сундучок с сокровищами! Каждая сказка будет бережно храниться здесь. 
                  Названия историй — это волшебные дверцы, коснись любой и сказка откроется! 
                  Можно отправлять в WhatsApp, Telegram или по почте.
                </div>
              </div>
            </div>
            <div className="relative group">
              <Button 
                className="bg-magical-pink hover:bg-magical-pink/90 text-white font-sans font-semibold text-lg px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Icon name="ShoppingCart" size={20} className="mr-3" />
                Заказать книгу
              </Button>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-3 bg-white/95 backdrop-blur-sm text-gray-800 text-sm rounded-xl shadow-xl border border-magical-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50 w-80">
                <div className="font-semibold text-magical-pink mb-1">🛒 Заказать книгу</div>
                <div className="text-xs leading-relaxed">
                  Эта кнопочка — для самого главного волшебства! Открывает дверь в мастерскую добрых книгочеев. 
                  Превратите свои любимые истории в настоящую книгу с иллюстрациями на качественной бумаге 
                  и твёрдой обложкой!
                </div>
              </div>
            </div>
            <div className="relative group">
              <Button 
                variant="outline"
                className="bg-fairy-green/20 hover:bg-fairy-green/30 text-enchanted-purple border-2 border-fairy-green font-sans font-semibold text-lg px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Icon name="MessageCircle" size={20} className="mr-3" />
                Телеграм
              </Button>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-3 bg-white/95 backdrop-blur-sm text-gray-800 text-sm rounded-xl shadow-xl border border-fairy-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50 w-80">
                <div className="font-semibold text-fairy-green mb-1">TELEGRAM</div>
                <div className="text-xs leading-relaxed">
                  А это — волшебный мостик! Если захочется пообщаться с Волшебным сочинителем 
                  в его уютном домике в Телеграме, эта кнопка мгновенно перенесёт тебя к нему в гости, 
                  и вы сможете продолжить сочинять сказки уже там!
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Основная область с диалогом */}
        <main className="flex-1 flex justify-center items-center px-8 pb-8">
          <Card className="w-full max-w-4xl h-[580px] bg-white/95 backdrop-blur-lg shadow-2xl border-0 rounded-3xl overflow-hidden">
            <CardContent className="p-8 h-full flex flex-col">
              {/* Заголовок чата */}
              <div className="flex items-center gap-4 pb-6 border-b-2 border-gray-200">
                <div className="w-14 h-14 bg-gradient-to-r from-magical-pink to-enchanted-purple rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl">🧚‍♀️</span>
                </div>
                <div>
                  <h2 className="font-caveat text-3xl font-bold text-enchanted-purple">
                    Волшебный сочинитель
                  </h2>
                  <p className="text-lg text-gray-600 font-sans">Создаём сказки вместе ✨</p>
                </div>
              </div>

              {/* Область сообщений */}
              <ScrollArea className="flex-1 mt-6 mb-6">
                <div className="space-y-6 pr-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[75%] rounded-3xl px-6 py-4 shadow-lg ${
                          message.sender === 'user'
                            ? 'bg-gradient-to-r from-magical-pink to-enchanted-purple text-white'
                            : 'bg-gradient-to-r from-white to-gray-50 text-gray-800 border border-gray-200'
                        }`}
                      >
                        <p className="font-sans text-base leading-relaxed">{message.text}</p>
                        <span className={`text-xs mt-2 block ${
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
              <div className="flex gap-4 pt-6 border-t-2 border-gray-200">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Напиши свой ответ..."
                  className="flex-1 font-sans text-lg px-6 py-4 border-2 border-gray-300 focus:border-magical-pink focus:ring-magical-pink/20 rounded-full shadow-inner"
                />
                <Button 
                  onClick={sendMessage}
                  className="bg-gradient-to-r from-magical-pink to-enchanted-purple hover:from-magical-pink/90 hover:to-enchanted-purple/90 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Icon name="Send" size={20} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}