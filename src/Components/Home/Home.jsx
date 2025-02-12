import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-screen bg-cover bg-center" 
         style={{ backgroundImage: "url('images/istockphoto.jpg')" }}>
        <div className="flex flex-col justify-center items-center text-center text-white h-full">
          {/* <h1 className="text-5xl font-bold">Sleek, Intuitive & Performant.</h1>
          <p className="text-xl mt-4">It's your design toolkit.</p> */}
          <Link className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg" to="/admin/">
            Start Exploring
          </Link>
        </div>
    </div>
  )
}

export default Home;
