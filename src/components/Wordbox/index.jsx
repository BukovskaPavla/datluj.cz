import React, { useState, useEffect } from "react";
import "./style.css";

const Wordbox = ({ word, onFinish, active, onMistake }) => {
  const [lettersLeft, setLettersLeft] = useState(word);
  const [mistake, setMistake] = useState(false);

  const handleKeyUp = (e) => {
    const zkracenyText = lettersLeft.slice(1);

    if (
      zkracenyText === "" &&
      e.key.toLowerCase() === lettersLeft.substring(0, 1).toLowerCase()
    ) {
      onFinish();
    } else if (
      e.key.toLowerCase() === lettersLeft.substring(0, 1).toLowerCase()
    ) {
      setLettersLeft(lettersLeft.substring(1));
      setMistake(false);
    } else {
      setMistake(true);
      onMistake();
    }
  };

  useEffect(() => {
    active ? document.addEventListener("keyup", handleKeyUp) : null;
    return () => document.removeEventListener("keyup", handleKeyUp);
  }, [lettersLeft, active, onMistake]);

  return (
    <div className={mistake ? "wordbox wordbox--mistake" : "wordbox"}>
      {lettersLeft}
    </div>
  );
};

export default Wordbox;
