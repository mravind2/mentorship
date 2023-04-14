import React, { useState, useEffect, useRef } from 'react';

const ChatWindow = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesRef = useRef(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    const response = await fetch('/api/chat');
    if (response.ok) {
      const data = await response.json();
      setMessages(data);
    }
  };

  const sendMessage = async () => {
    const message = inputMessage.trim();
    if (message.length === 0) {
      return;
    }

    const username = 'YourUsername'; // Replace this with the actual username
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        message,
      }),
    });

    if (response.ok) {
      setInputMessage('');
      const newMessage = await response.json();
      setMessages([...messages, newMessage]);
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  };

  return (
    <div className="fixed bottom-0 right-0 mb-4 mr-4 bg-white border border-gray-300 rounded-lg shadow-lg w-80 h-96">
      <div className="flex justify-between items-center p-4 text-xl font-bold border-b border-gray-200">
        <div>Chat</div>
        <button className="text-gray-500 hover:text-red-500" onClick={onClose}>
          &times;
        </button>
      </div>
      <div ref={messagesRef} className="h-60 p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div key={index} className="border-b border-gray-200 py-1">
            <strong>{message.username}:</strong> {message.message}
          </div>
        ))}
      </div>
      <div className="p-4 pt-2">
        <input
          type="text"
          className="w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Type your message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              sendMessage();
            }
          }}
        />
        <button
          className="mt-2 w-full py-2 bg-blue-500 text-white font-semibold rounded-lg"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
