"use client"
import { useState } from 'react';

import Header from "./_components/header";
import SideBar from "./_components/sidebar";


export default function Layout(props: {
    
    children: React.ReactNode;
}) {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarCollapsed(!isSidebarCollapsed);
    };
  
    return (
        <>

            <div className="flex max-h-screen">
                <SideBar isCollapsed={isSidebarCollapsed} />
                <div className="w-full px-20">
                    <Header toggleSidebar={toggleSidebar}/>
                    {props.children}
                </div>
            </div>
        </>
    );
}