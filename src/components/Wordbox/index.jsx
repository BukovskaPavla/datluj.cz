import React, { useState, useEffect } from "react";
import "./style.css";

const Wordbox = ({ word, onFinish }) => {
  const [lettersLeft, setLettersLeft] = useState(word);


  const handleKeyUp = (e) => {
    const zkracenyText = lettersLeft.slice(1);

    if (zkracenyText === "" && e.key.toLowerCase() === lettersLeft.substring(0, 1).toLowerCase()) {
      onFinish();
    } else if (e.key.toLowerCase() === lettersLeft.substring(0, 1).toLowerCase()) {
      setLettersLeft(lettersLeft.substring(1));
    }
  };

  useEffect(() => {
    document.addEventListener("keyup", handleKeyUp);
    return () => document.removeEventListener("keyup", handleKeyUp);
  }, [lettersLeft]);

  return <div className="wordbox">{lettersLeft}</div>;
};

export default Wordbox;
