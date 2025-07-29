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
            <Button 
              variant="outline" 
              className="bg-white/90 hover:bg-white text-enchanted-purple border-2 border-enchanted-purple font-sans font-semibold text-lg px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Icon name="BookOpen" size={20} className="mr-3" />
              Твои сказки
            </Button>
            <Button 
              className="bg-magical-pink hover:bg-magical-pink/90 text-white font-sans font-semibold text-lg px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Icon name="ShoppingCart" size={20} className="mr-3" />
              Заказать книгу
            </Button>
            <Button 
              variant="outline"
              className="bg-fairy-green/20 hover:bg-fairy-green/30 text-enchanted-purple border-2 border-fairy-green font-sans font-semibold text-lg px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Icon name="MessageCircle" size={20} className="mr-3" />
              Телеграм
            </Button>
          </div>
        </header>

        {/* Добро пожаловать в мастерскую */}
        <div className="px-8 pb-4">
          <Card className="max-w-6xl mx-auto bg-white/90 backdrop-blur-sm shadow-lg border-0 rounded-2xl">
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <h2 className="font-caveat text-3xl font-bold text-enchanted-purple mb-3">
                  Добро пожаловать в «Мастерскую сказок»!
                </h2>
                <div className="max-w-4xl mx-auto text-gray-700 font-sans leading-relaxed space-y-3 text-left">
                  <p>
                    Здравствуй, юный мечтатель! Ты попал в волшебное место, где рождаются самые удивительные истории. Наша «Мастерская сказок» — это сказочный уголок в интернете, где живёт Волшебный сочинитель. Это добрый дух, который умеет придумывать приключения, и он очень хочет подружиться с тобой!
                  </p>
                  <p>
                    Посмотри на это окошко для разговоров! Здесь ты можешь поболтать с Волшебным сочинителем, как с лучшим другом. Он спросит у тебя, для кого мы будем сочинять сказку, как зовут главного героя и о чём он мечтает. А потом — раз! — и на ваших глазах родится настоящее чудо, история только для вас!
                  </p>
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="font-caveat text-xl font-bold text-enchanted-purple mb-3 text-center">
                  А теперь давай посмотрим, какие волшебные кнопочки есть наверху.
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="p-4 bg-white/60 rounded-xl border border-enchanted-purple/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="BookOpen" size={20} className="text-enchanted-purple" />
                    <h3 className="font-caveat text-lg font-bold text-enchanted-purple">📖 Твои сказки</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    Это твой личный сундучок с сокровищами! Каждая сказка, которую вы придумаете вместе с Волшебным сочинителем, будет бережно храниться здесь.
                  </p>
                  <ul className="text-gray-600 text-xs space-y-1 pl-3">
                    <li>• Названия историй — это волшебные дверцы. Коснись любой, и сказка тут же откроется!</li>
                    <li>• Рядом с каждой сказкой будут маленькие иконки для отправки в WhatsApp, Telegram или по почте!</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-white/60 rounded-xl border border-magical-pink/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="ShoppingCart" size={20} className="text-magical-pink" />
                    <h3 className="font-caveat text-lg font-bold text-magical-pink">🛒 Заказать книгу</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    Эта кнопочка — для самого главного волшебства! Она открывает дверь в мастерскую добрых книгочеев.
                  </p>
                  <p className="text-gray-600 text-xs">
                    Здесь ты можешь превратить свои любимые истории в настоящую, пахнущую типографской краской книгу! Можно выбрать самые-самые лучшие сказки, добавить красивые картинки, и мастера напечатают для тебя сокровище с твёрдой обложкой!
                  </p>
                </div>
                
                <div className="p-4 bg-white/60 rounded-xl border border-fairy-green/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="MessageCircle" size={20} className="text-fairy-green" />
                    <h3 className="font-caveat text-lg font-bold text-fairy-green">TELEGRAM</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    А это — волшебный мостик! Если тебе захочется пообщаться с Волшебным сочинителем не здесь, а в его уютном домике в Телеграме, просто нажми на эту кнопку.
                  </p>
                  <p className="text-gray-600 text-xs">
                    Она мгновенно перенесёт тебя к нему в гости, и вы сможете продолжить сочинять сказки уже там!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Основная область с диалогом */}
        <main className="flex-1 flex justify-center items-start px-8 pb-8">
          <Card className="w-full max-w-3xl h-[360px] bg-white/95 backdrop-blur-lg shadow-2xl border-0 rounded-3xl overflow-hidden">
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