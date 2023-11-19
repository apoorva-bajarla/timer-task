import React, { useState, useEffect } from "react";
 import "./App.css";

 const Countdown = () => {
 const [count, setCount] = useState(0);
   const [startCounter, setStartCounter] = useState(false);
   const [isRunning, setIsRunning] = useState(false); 

   useEffect(() => {
     let intervalId = null;
     if (startCounter) {
       setIsRunning(true); 
      intervalId = setInterval(() => {
        setCount((prev) => prev + 1);
       }, 1000);
     } else {
      setIsRunning(false); 
     clearInterval(intervalId);
    }
     return () => clearInterval(intervalId);
  }, [startCounter]);

  return (
        <>  
      <div className="count">{count}</div>
      <button 
         onClick={() => setStartCounter(true)}
          disabled={isRunning}>
         Start
       </button>
       <button
         onClick={() => setStartCounter(false)}     
             disabled={!isRunning}  >
          Stop
      </button>
      </>
     );
 };
 export default Countdown;




















