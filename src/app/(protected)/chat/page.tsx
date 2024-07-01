"use client";
import { useState, useEffect, useRef } from 'react';

const ChatPage = () => {
    const [messages, setMessages] = useState([
        { id: 1, sender: 'User', text: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but ' },

        { id: 2, sender: 'AI', text: ' also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },

        { id: 3, sender: 'User', text: 'His heart quickened, but this time, something was different.' },
        { id: 4, sender: 'AI', text: 'p publishing software like Aldus PageMaker including versions of Lorem Ipsum.p publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
    ]);

    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const sendMessage = () => {
        if (inputValue.trim() !== '') {
            setMessages([...messages, { id: messages.length + 1, sender: 'User', text: inputValue }]);
            setInputValue('');
        }
    };

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    return (
        <div className="grid grid-rows-[1fr_auto] h-[90vh]">
            <div className="overflow-y-auto p-4 "style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {messages.map((message) =>
                    message.sender === 'User' ? (
                        <div key={message.id} className="my-2 w-fit max-w-xs p-4 rounded-3xl bg-blue-100 self-end ml-auto">
                            {message.text}
                        </div>
                    ) : (
                        <div key={message.id} className="my-2 w-fit max-w-xs p-4 self-start flex items-start gap-3">
                        <div className="rounded-full bg-slate-400 w-24 h-6 flex items-center justify-center text-white">
                            AI
                        </div>
                        <div>
                            {message.text}
                        </div>
                    </div>
                    )
                )}
                <div ref={messagesEndRef} />
            </div>
            <div className="h-12 bg-gray-100 flex items-center  border-t border-gray-200  rounded-3xl">
                <input
                    type="text"
                    className="flex-1  p-4 mr-2 focus:outline-none bg-transparent"
                    placeholder="Ask AI Something..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    style={{ boxShadow: 'none' }}
                />
                <button
                    className="bg-slate-900 h-full text-white px-4 rounded-3xl"
                    onClick={sendMessage}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatPage;
