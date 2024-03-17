import React, { useState } from 'react';
import ChatIcon from '../assets/Chat.png';
import SendIcon from '../assets/Send.png';
import ProfilePhoto from '../assets/Profile photo.png';
import StockWise from '../assets/StockWise.png';

function Question({ text, timestamp }) {
  return (
    <div className="flex flex-row-reverse items-center">
      <img src={ProfilePhoto} alt="Profile Photo" className="w-8 h-8 ml-1 rounded-full"/>
      <div className="p-2 bg-[#03045E] h-auto w-[16rem] rounded-md">
        <h6 className="text-white text-left text-[14px] font-semibold">Alex</h6>
        <p className="text-white text-left text-pretty leading-none">{text}</p>
        <h6 className="text-white text-[10px] font-light text-right">{timestamp}</h6>
      </div>
    </div>
  )
}

function Answer({ text, timestamp }) {
  return (
    <div className="flex flex-row items-center">
      <img src={StockWise} alt="StockWise" className="bg-white w-8 h-8 mr-1 rounded-full"/>
      <div className="p-2 bg-gray-100 h-auto w-[16rem] rounded-md">
        <h6 className="text-black text-left text-[14px] font-semibold">StockWise</h6>
        <p className="text-black text-left text-pretty leading-none">{text}</p>
        {console.log(timestamp)}
        <h6 className="text-black text-[10px] font-light text-right">{timestamp}</h6>
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

  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState(() => {
    const storedConversation = localStorage.getItem('conversation');
    return storedConversation ? JSON.parse(storedConversation) : [];
  });

  const handleChange = (e) => {
    setMessage(e.target.value);
  }
  const handleSend = () => {
    if (message.trim() !== '') {
      const currentTime = new Date().toLocaleDateString();
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
            text: "Generated response.",
            timestamp: currentTime
          }
        ];
        setConversation(updatedConversation);
        localStorage.setItem('conversation', JSON.stringify(updatedConversation));
    }
    setMessage('');
  }

  return (
    <div className="fixed bottom-8 right-8 z-10 rounded-3xl items-end flex flex-row-reverse">
      <div>
        <button onClick={handleClick} className="p-4 h-16 bg-[#00B4D8] rounded-3xl shadow-2xl hover:bg-[#00B4D8]/90 active:shadow-inner">
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
        <div className="h-auto w-96 bg-[#CAF0F8] rounded-xl shadow-3xl border border-black">
          <p className="p-2 text-black text-center text-xl font-bold border-b border-black">StockWise</p>
          <div className="px-4 py-2 flex flex-col h-[22rem] overflow-auto gap-2">
            {conversation.map((item, index) => (
              item.qna === true ? <Question text={item.text} timestamp={item.timestamp}/> : <Answer text={item.text} timestamp={item.timestamp}/>
            ))}
          </div>
          <div className="flex justify-between px-2 py-1 items-center">
            <input type="text" value={message} onChange={handleChange} placeholder="Message..." className="flex flex-1 mr-2 rounded-xl font-bold bg-[#0077B6] text-white placeholder:text-white shadow-inner" onKeyDown={(e) => {
              if (e.key === 'Enter'){
                handleSend();
              }
            }}/>
            <button onClick={handleSend} className="p-2 bg-[#0077B6] rounded-full border-black hover:border">
              <img src={SendIcon} alt="Send" className="w-8 h-8"/>
            </button>
          </div>
        </div>
      )}
    </div>
  )
};

export default Chat;
