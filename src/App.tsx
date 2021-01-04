import React from 'react';
import logo from './logo.svg';
import './App.css';
import WebCam from './components/webcam';
import WebCamHook from './components/webcam-hook';

function App() {
  return (
    <div className = 'app_container'>
      <span className = 'app_title'>DEMO WEBCAM</span>
      <WebCam/>
      {/* <WebCamHook/> */}
      
    </div>
  );
}



export default App;
