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
    <div className='w-1/2 p-8 text-center'>
      <h3>Please enter full screen</h3>
      <button onClick={triggetFullScreen} className='bg-green-400 w-48 rounded-md py-3 px-2 hover:bg-green-800'>Full screen</button>
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
      </div>
    }
    </>
  );
}

export default App;
