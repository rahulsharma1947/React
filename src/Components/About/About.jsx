import React from 'react';
import { Button } from 'react-bootstrap';

const About = () => {
    return (
        <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          
          {/* Navbar */}
          <nav className="absolute top-0 left-0 w-full p-4 flex justify-between items-center text-white">
            <h1 className="text-2xl font-bold">Comming Soon</h1>
            
            <div className="flex space-x-4">
              
            </div>
          </nav>
          
         
        </div>
      );
}

export default About;
