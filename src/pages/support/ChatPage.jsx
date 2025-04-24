import React, { useState, useEffect, useRef } from 'react';
import InputField from '../../components/ui/InputField';
import Button from '../../components/ui/Button';

function ChatPage() {
  //Lógica de Estado y Manejadores 
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hola, soy ContApp Assistant. ¿En qué puedo ayudarte hoy?', sender: 'bot' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    const trimmedMessage = newMessage.trim();
    if (!trimmedMessage) return;
    const userMessage = { id: Date.now(), text: trimmedMessage, sender: 'user' };
    // Simulación respuesta bot
    const botResponse = { id: Date.now() + 1, text: `Recibí: "${trimmedMessage}". Procesando...`, sender: 'bot' };
    setMessages(prev => [...prev, userMessage, botResponse]);
    setNewMessage('');
  };
  //

  return (
    // Contenedor principal que ocupa el espacio dentro de MainLayout
    <div className="h-full flex flex-col bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">

       <div className="p-4 border-b border-gray-200">
         <h1 className="text-xl font-semibold text-gray-800">Asistente Virtual ContApp</h1>
       </div>

      <div className="flex-grow p-4 overflow-y-auto space-y-3">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[75%] p-3 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-indigo-500 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-gray-200 bg-gray-50"> {/* Fondo ligeramente diferente */}
        <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
          {/* Podrías usar InputField si lo adaptas o un input normal */}
            <InputField value={newMessage} onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Escribe tu pregunta..." autoComplete="off" className="flex-grow px-4"
                />
          <Button type="submit" variant="primary">
            Enviar
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ChatPage;