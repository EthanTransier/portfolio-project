import React, { useState, useEffect } from 'react';

const TextScramble = ({item}) => {
  const [text, setText] = useState('');
    const item = item.split('')
  useEffect(() => {
    const intervalId = setInterval(() => {
        let result = "";
        for (let i = 0; i < item.length; i++) {
            if (i < iteration) {
                // if the iteration has gotten to I, which is after the letters have randomized for a few cycles, then it will show red, since the user is hovered over it. If the user is not hovering over it, and it is the end animation, the text will be white
                result += `<p class="${condition ? 'red-text' : ''}">${item[i]}</p>`;
            } else {
                result += `<p class="${condition ? '' : 'red-text'}">${random()}</p>`;
            }
        }
        text.innerHTML = result;
        if (iteration >= realText.length) {
            clearInterval(intervalId);
        }
        iteration += 1 / 3;
        // console.log(iteration);
    }, 20);
    return () => clearInterval(interval);
  }, [charIndex, phraseIndex]);

  const randomChar = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return chars[Math.floor(Math.random() * chars.length)];
  };

  return <span className="text">{text}</span>;
};

export default TextScramble;
