import './App.css';
import Login from './components/Login.jsx';  
import React from 'react';

import instaFont from './assets/instaFont.png';

 



function App() {
  return (
    <div className="App">
      {/* <h1>Instagram</h1> */}
      <h1><img src={instaFont} alt="" className="instaFont" /></h1>
     <Login />
    </div>
  );
}

export default App;
