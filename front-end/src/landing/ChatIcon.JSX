import React, { useState } from 'react';
import ChatBot from './ChatBot';

function ChatIcon() {
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <div className="fixed bottom-0 right-0 m-4 sm:m-8 lg:m-12">
      <button className="p-4 sm:p-5 lg:p-6 bg-blue-500 text-white rounded-full" onClick={toggleChat}>
        <img src="https://cdn.dribbble.com/users/689802/screenshots/4044319/respage_chatbot_bubbletalk_dribbble.gif" className="h-14 w-14" alt="chat icon" />
      </button>
      {showChat && <ChatBot onClose={() => setShowChat(false)} />}
    </div>
  );
}

export default ChatIcon;
