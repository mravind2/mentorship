import React, { useState } from 'react';
import ChatBot from './ChatBot';

function ChatIcon() {
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <div className="fixed bottom-0 right-0 m-4">
      <button className="p-3 bg-blue-500 text-white rounded-full" onClick={toggleChat}>
        <img src="https://freesvg.org/img/1538298822.png" className="h-14 w-14" alt="chat icon" />
      </button>
      {showChat && <ChatBot onClose={() => setShowChat(false)} />}
    </div>
  );
}

export default ChatIcon;
