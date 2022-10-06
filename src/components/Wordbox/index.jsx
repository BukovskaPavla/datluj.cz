import React, { useState, useEffect } from 'react';
import './style.css';

const Wordbox = ({ word }) => {
  const [lettersLeft, setLettersLeft] = useState(word);  

  const handleKeyUp = (e) => {
    
    if (e.code.substring(3,4).toLowerCase() === lettersLeft.substring(0,1)){
      setLettersLeft(lettersLeft.substring(1))
    }
    }

    useEffect(() => {
      document.addEventListener("keyup", handleKeyUp)
      return () => document.removeEventListener('keyup', handleKeyUp);
    }, [lettersLeft]);
  
  
  return (
    <div className="wordbox">{lettersLeft}</div>
  );
};

export default Wordbox;
