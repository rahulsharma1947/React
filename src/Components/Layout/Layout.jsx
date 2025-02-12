import React, { Fragment } from 'react';
import { useRoutes, Routes,Outlet } from "react-router-dom";
import Header from '../UI/Header/Header';
import Footer from '../UI/Footer/Footer';
import Home from '../Home/Home';
import About from '../About/About'; 
import Sidebar from '../sidebar/sidebar';


const Layout = () => {
  return (
    <main className='h-screen'>
      <Header/>
        <div className='h-[calc(100%-14px)]'>
          
        <Outlet />
        
        </div>
      <Footer/>
    </main>
  );
};

export default Layout;
