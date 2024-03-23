import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import ChatIcon from '../assets/Chat.png';
import SendIcon from '../assets/Send.png';
import StockWise from '../assets/StockWise.png';

function Question({ text, timestamp }) {
  return (
    <div class="flex flex-row-reverse items-end gap-2.5 md:mb-2">
      <div class="flex flex-col w-fit max-w-[80%] text-wrap leading-1.5 py-2 px-3 bg-primary rounded-s-xl rounded-ee-xl">
        <p class="text-sm font-normal break-words text-white max-w-full text-wrap">{text}</p>
        <p className="text-white text-[10px] font-light text-right ml-3">{timestamp}</p>
      </div>
    </div>
  )
}

function Answer({ text, timestamp }) {
  return (
    <div class="flex items-start gap-2.5 md:mb-2">
    <img class="w-8 h-8 rounded-full shadow-sm border border-gray-200" src={StockWise} alt="StockWise"/>
    <div class="flex flex-col w-fit max-w-[80%] leading-1.5 py-2 px-3 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
        <p class="text-sm font-normal break-words text-gray-900 dark:text-white max-w-full text-wrap">{text}</p>
        <p className="text-gray-500 text-[10px] font-light text-right">{timestamp}</p>
    </div>
    </div>
  )
}

function SuggestionQuestion({ text }) {

}

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // Generate random chat id
  const chatId = "chat-1";
  const messageContainerRef = useRef(null);

  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState(() => {
    // const storedConversation = localStorage.getItem(chatId);
    // return storedConversation ? JSON.parse(storedConversation) : [];

    // If no conversation, return 'Hi there! How can I help you today?'
    if (localStorage.getItem(chatId) === null) {
      const currentTime = new Date().toLocaleTimeString();
      const initialConversation = [
        {
          qna: false,
          text: "Hi there! How can I help you today?",
          timestamp: currentTime
        }
      ];
      localStorage.setItem(chatId, JSON.stringify(initialConversation));
      return initialConversation;
    } else {
      return JSON.parse(localStorage.getItem(chatId));
    }
  });

  const handleChange = (e) => {
    setMessage(e.target.value);
  }

  const handleSend = () => {
    if (message.trim() !== '') {
      const currentTime = new Date().toLocaleTimeString();
      const updatedConversation =
        [...conversation,
          //qna: true -> question, false -> answer
          {
            qna: true,
            text: message,
            timestamp: currentTime
          },
          {
            qna: false,
            // Example question: "What is the current price of TSLA? Is it a good time to buy?"
            // 170.83 -1.99 (-1.15%)
            text: "The current price of TSLA is $170.83, which is a decrease of $1.99 (-1.15%) from the previous close. The stock is currently rated as a 'Buy' by analysts, because Tesla recently announced record deliveries and strong demand for its electric vehicles.",
            timestamp: currentTime
          }
      ];
      setConversation(updatedConversation);
      localStorage.setItem(chatId, JSON.stringify(updatedConversation));
    }
    setMessage('');
  }

  function createNewChat() {
    localStorage.removeItem(chatId);
    setConversation([
      {
        qna: false,
        text: "Hi there! How can I help you today?",
        timestamp: new Date().toLocaleTimeString()
      }
    ]);
  }

  useEffect(() => {
    // Scroll to the bottom of the message container when conversation updates
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, [conversation]);

  return (
    <div className="fixed bottom-8 right-8 z-10 rounded-3xl items-end flex flex-col-reverse">
      {/* Chat floating button */}
      <div>
        <button onClick={handleClick} className="p-4 my-2 bg-primary rounded-3xl shadow-2xl hover:bg-blue-600 active:shadow-inner">
          <img src={ChatIcon} alt="Chat" className="w-8 h-8"/>
        </button>
        {!isOpen && (
          <span className="absolute top-0 right-0 -mt-1 -mr-1" onClick={handleClick}>
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400  opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
          </span>
        )}
      </div>
      {isOpen && (
        <div className="h-auto w-[80%] min-w-[20rem] md:min-w-[30rem] bg-white rounded-xl shadow-3xl border border-gray-300">
          <p className="flex justify-between items-center p-3 text-center text-xl border-b border-gray-200">
            <p className='text-gray-700 font-semibold'>StockWise</p>
            <button onClick={createNewChat} className="pb-1 px-2 bg-red-500 rounded-full hover:bg-red-600">
              <span className="text-white text-sm font-medium">Clear</span>
            </button>
          </p>
          <div ref={messageContainerRef} className="px-4 py-2 flex flex-col h-[20rem] overflow-y-auto gap-2">
            {conversation.map((item, index) => (
              item.qna === true ? <Question text={item.text} timestamp={item.timestamp}/> : <Answer text={item.text} timestamp={item.timestamp}/>
            ))}
          </div>
          <div className="flex justify-between py-1 m-1 items-center">
            {/* <input type="text" value={message} onChange={handleChange} placeholder="Message..." className="flex flex-1 mr-2 rounded-xl text-black placeholder:text-white shadow-inner text-wrap h-fit border-gray-300" onKeyDown={(e) => {
              if (e.key === 'Enter'){
                handleSend();
              }
            }}/> */}
            <textarea
              value={message}
              onChange={handleChange}
              placeholder="Your message..."
              className="grow block mx-1 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault(); // Prevent default behavior of newline in textarea
                  handleSend();
                }
              }}
            />
            <button onClick={handleSend} className="grow-0 p-2 bg-primary rounded-full hover:bg-blue-600">
              <img src={SendIcon} alt="Send" className="w-8 h-8"/>
            </button>
          </div>
        </div>
      )}
    </div>
  )
};

export default Chat;
