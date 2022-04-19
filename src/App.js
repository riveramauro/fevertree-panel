import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from './components/Navigation';

import idleBanner from "./images/idleBanner.png";

// Import page as a module before adding to the `Routes` below.
import Home from "./pages/Home";
import SparklingPink from "./pages/SparklingPink";
import SparklingLime from "./pages/SparklingLime";
import PremiumSoda from "./pages/PremiumSoda";
import EasyCocktails from "./pages/EasyCocktails";
import Sustainability from "./pages/Sustainability";

import './App.css';
import 'animate.css'

function SplashScreen({updateStatusFullScreen}) {
  const triggetFullScreen = () => {
    document.documentElement.requestFullscreen().then(() => {
      updateStatusFullScreen(true);
    });
    
  }
  return (
    <div className='absolute w-full h-full flex flex-col justify-center items-center p-8 text-center bg-slate-400 '>
      <h3 className="text-3xl text-white font-bold mb-4">Press to enter full screen mode</h3>
      <button onClick={triggetFullScreen} className='bg-green-200 w-48 rounded-md py-3 px-2 drop-shadow-lg hover:bg-green-400'>Full screen</button>
    </div>
  )
}

function App() {
    const [fullScreenStatus, setFullScreenStatus] = useState(true)
    const updateStatus = (status) => {
      setFullScreenStatus(status);
    }

  //   useEffect(() => {
  //   const isFull = document.fullscreenElement;
  //   if(!isFull) {
  //     setFullScreenStatus(false)
  //   } else {
  //     setFullScreenStatus(true)
  //   }
  // },[])

  const [idleStatus, setIdleStatus] = useState(false);

  const idleListener = () => {
    let timer = null;
    window.onload = resetTimer;
    window.onmousemove = resetTimer;
    window.onmousedown = resetTimer;  // catches touchscreen presses as well      
    window.ontouchstart = resetTimer; // catches touchscreen swipes as well      
    window.ontouchmove = resetTimer;  // required by some devices 
    window.onclick = resetTimer;      // catches touchpad clicks as well
    window.onkeydown = resetTimer;   
    window.addEventListener('scroll', resetTimer, true); // improved; see comments

    function updateIdle() {
        // your function for too long inactivity goes here
        setIdleStatus(true);
        console.log('idle');
    }

    function resetTimer() {
        clearTimeout(timer);
        setIdleStatus(false);
        timer = setTimeout(updateIdle, 10000);  // time is in milliseconds
    }
  }

  useEffect(() => {
    idleListener()
  }, [])
  

  return (
    <>
    {!fullScreenStatus ?
      <SplashScreen fullScreenStatus={fullScreenStatus} updateStatusFullScreen={updateStatus} />
      : 
      <div className="App">
        <Navigation />
        <Routes>
          {/* Add pages here */}
          <Route path="/" element={<Home />} />
          <Route path="SparklingPink" element={<SparklingPink />} />
          <Route path="SparklingLime" element={<SparklingLime />} />
          <Route path="PremiumSoda" element={<PremiumSoda />} />
          <Route path="EasyCocktails" element={<EasyCocktails />} />
          <Route path="Sustainability" element={<Sustainability />} />
        </Routes>
        {idleStatus ?
          <div className="absolute w-full h-full animate__animated animate__fadeIn" style={{background: 'rgba(100, 100, 100, 0.5)'}}>
            <img src={idleBanner} alt="Tap Screen to Discover More" />
          </div>
        : ''}
      </div>
    }
    </>
  );
}

export default App;
