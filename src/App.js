import './App.css';
import Login from './components/Login.jsx';  
import React from 'react';
import { FaInstagramSquare } from "react-icons/fa";
 



function App() {
  return (
    <div className="App">
      <h1>Instagram</h1>
     <Login />
     <FaInstagramSquare />
    </div>
  );
}

export default App;
