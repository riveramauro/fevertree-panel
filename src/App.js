import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from './components/Navigation';
import Home from "./pages/Home";
import SparklinPink from "./pages/SparklinPink";
import EasyCocktails from "./pages/EasyCocktails";

import './App.css';
import 'animate.css'

export function SplashScreen({updateStatusFullScreen}) {
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

  const inactivityTimer = () => {
    let timer;

    const resetTimer = () => {
      console.log('hello');
      clearTimeout(timer);
      timer = setTimeout(() => {
        console.log('tick');
      }, 3000);
      console.log(timer);
    }

    resetTimer();

    window.onmousemove = resetTimer();
    window.onclick = resetTimer();

    

  }

  useEffect(() => {
    inactivityTimer()
  
    // return () => {
    //   null
    // }
  }, [])
  

  return (
    <>
    {!fullScreenStatus ?
      <SplashScreen fullScreenStatus={fullScreenStatus} updateStatusFullScreen={updateStatus} />
      : 
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="SparklinPink" element={<SparklinPink />} />
          <Route path="EasyCocktails" element={<EasyCocktails />} />
        </Routes>
        <div className="absolute w-full h-full bg-slate-400 bg-opacity-50">Splash</div>
      </div>
    }
    </>
  );
}

export default App;
