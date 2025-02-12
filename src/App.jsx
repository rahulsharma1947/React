import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import AppRoutes from './routes/AppRoutes';


function App() {

  return (
    <>
    <Router basename="/webapp/">
        <AppRoutes/>
    </Router>
    </>
  )
}


export default App
