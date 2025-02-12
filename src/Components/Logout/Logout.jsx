import React ,{useEffect}from 'react';
import { useNavigate } from "react-router-dom"; 

const Logout = () => {
    const navigate = useNavigate(); // Initialize navigation
    localStorage.removeItem("token");
    useEffect(() => {
        navigate("/Login");
    }, []);
    
  return (
    <div>Logout</div>
  )
}

export default Logout;
