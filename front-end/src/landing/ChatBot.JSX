import React, { useState } from 'react';

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessages([...messages, { content: inputValue, sender: 'user' }]);
    setInputValue('');

    // Make an API call or perform any other logic to generate a response message
    const response = 'Hello! How can I help you today?';
    setTimeout(() => {
      setMessages([...messages, { content: response, sender: 'bot' }]);
    }, 500);
  };

  const toggleChatBot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`chatbot-container fixed bottom-0 right-0 mb-4 mr-4 ${isOpen ? 'open' : ''}`}
      style={{ backgroundColor: '#f2f2f2' }}
    >
      {isOpen && (
        <>
          <div className="chatbot-header bg-white shadow-lg rounded-lg">
            <div className="flex justify-between items-center py-2 px-3">
              <h3 className="text-lg font-semibold">ChatBot</h3>
              <button className="text-gray-500 hover:text-gray-800" onClick={toggleChatBot}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M12.707 12.707a1 1 0 0 1-1.414 0L10 11.414l-1.293 1.293a1 1 0 1 1-1.414-1.414L8.586 10l-1.293-1.293a1 1 0 1 1 1.414-1.414L10 8.586l1.293-1.293a1 1 0 1 1 1.414 1.414L11.414 10l1.293 1.293a1 1 0 0 1 0 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="chatbot-messages p-4">
            {messages.map((message, index) => {
              const { content, sender } = message;
              return (
                <div
                  key={index}
                  className={`message ${sender} bg-white rounded-lg shadow-md p-3 mb-2`}
                >
                  {content}
                </div>
              );
            })}
          </div>
          <form onSubmit={handleSubmit} className="chatbot-form p-4">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type your message"
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-400 mb-4"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-lg shadow-md"
            >
              Send
            </button>
          </form>
        </>
      )}
      <button
        className="chatbot-toggle bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full"
        onClick={toggleChatBot}
      >
        Chat
      </button>
    </div>
  );
}

export default ChatBot;
