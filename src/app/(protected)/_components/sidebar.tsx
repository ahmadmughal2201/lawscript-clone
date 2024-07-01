"use client"
import { useState } from 'react';
import Link from 'next/link';

interface Chat {
    id: number;
    name: string;
}

interface SideBarProps {
    isCollapsed: boolean;
}

export default function SideBar({ isCollapsed }: SideBarProps) {
    const [isChatSectionOpen, setIsChatSectionOpen] = useState(false);
    const [isMatterSectionOpen, setIsMatterSectionOpen] = useState(false);
    const [chats, setChats] = useState<Chat[]>([
        { id: 1, name: 'Chat 1' },
        { id: 2, name: 'Chat 2' },
        { id: 3, name: 'Chat 3' }
    ]);

    const toggleChatSection = () => {
        setIsChatSectionOpen(!isChatSectionOpen);
    };
    const toggleMatterSection = () => {
        setIsMatterSectionOpen(!isMatterSectionOpen);
    };

    return (
        <div className={`h-screen bg-gray-100 ${isCollapsed ? 'w-40' : 'w-96'} transition-all`}>
            <div className="py-4 flex flex-col justify-center items-center">
                <div className="text-2xl font-bold py-10 text-black">DigiLawyer</div>
                <div className="w-full flex flex-col justify-center items-start text-gray-800">
                    <Link href="/dashboard" className='w-full items-center'>

                        <div className="hover:bg-gray-200 hover:text-gray-500 w-full flex items-center h-12 text-left px-6">
                            Dashboard
                        </div>
                    </Link>
                    <button
                        onClick={toggleChatSection}
                        className="hover:bg-gray-200 hover:text-gray-500 w-full h-12 flex items-center justify-between px-6"
                    >
                        <span>Chats</span>
                        <span>{isChatSectionOpen ? 'v' : '>'}</span>
                    </button>

                    {isChatSectionOpen && (
                        <div className="w-full">
                            {chats.length === 0 ? (
                                <div className="py-2 w-full text-purple-700 flex items-center justify-between hover:bg-purple-100 px-6">
                                    <span className='pl-6'>Create Chat</span>
                                    <span className='text-3xl font-normal flex items-center justify-center'>+</span>
                                </div>
                            ) : (
                                chats.map((chat) => (
                                    <Link href="/chat" key={chat.id} passHref>
                                        <div className="py-2 text-purple-700 hover:bg-purple-200 cursor-pointer px-10">
                                            {chat.name}
                                        </div>
                                    </Link>
                                ))
                            )}
                        </div>
                    )}
                    <button
                        onClick={toggleMatterSection}
                        className="hover:bg-gray-200 hover:text-gray-500 w-full h-12 flex items-center justify-between px-6"
                    >
                        <span>Matters</span>
                        <span>{isMatterSectionOpen ? 'v' : '>'}</span>
                    </button>
                    {isMatterSectionOpen && (
                        <div className="w-full">
                            <div className="py-2 w-full text-purple-700 flex items-center justify-between hover:bg-purple-200 px-6">
                                <span className='pl-6'>Create Matter</span>
                                <span className='text-3xl font-normal flex items-center justify-center'>+</span>
                            </div>

                        </div>
                    )}


                </div>
            </div>
        </div>
    );
}
