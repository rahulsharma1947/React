import React,{ useEffect } from "react";
import { MdDashboard } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";
import Link from "../UI/Link/Link";


const Sidebar =({status})=>{
    //useEffect(() =>{console.log(status);},[status]);
    return (
    <aside className="h-screen">
      <div className="h-14 bg-red-700 text-white font-bold text-2xl text-center">
        <div className="p-2">{status?'ADMIN':''}</div>
      </div>
      <div className="text-white">
        <ul>
            <li className="p-2 hover:bg-gray-700 cursor-pointer flex items-center">
                <Link target='/admin/' classes='nav-link flex!'> <MdDashboard className="mt-1 mr-2" />{status?'Dashboard':''} </Link>
            </li>
            <li className="p-2 hover:bg-gray-700 cursor-pointer flex items-center">
                <Link target='/admin/' classes='nav-link flex!'> <FaMapMarkedAlt className="mt-1 mr-2" /> {status?'Map View':''}</Link>
            </li>
        </ul>
      </div>
    </aside>
    )
}

export default Sidebar;