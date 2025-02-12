import React, { Fragment, useState } from 'react';
import {useRoutes, Routes, Outlet  } from "react-router-dom";
import Header from '../UI/Header/Header';
import Footer from '../UI/Footer/Footer';
import Sidebar from '../sidebar/sidebar';
import { BsArrowLeftShort } from 'react-icons/bs';

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className='flex w-100 h-screen'>
        <div className={`h-screen p-0 ${sidebarOpen? "w-72":"w-20"} duration-300 relative bg-gray-900`}>
            <Sidebar status={sidebarOpen}></Sidebar>
            <BsArrowLeftShort className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border cursor-pointer ${!sidebarOpen && "rotate-180"} z-1`}
            onClick={()=>setSidebarOpen(!sidebarOpen)}></BsArrowLeftShort>
        </div>
        
        <div className={`${sidebarOpen? "w-[calc(100%-288px)]":"w-[calc(100%-80px)]"}`}>
            <Header/>
            <Outlet />
            <Footer/>
        </div>
    </div>
  );
};

export default AdminLayout;
