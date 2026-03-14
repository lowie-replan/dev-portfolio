import { useState, useEffect } from 'react';

const TypingEffect = () => {

  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const textToType = ["Full-Stack Developer", "Mobile Application Developer", "AI & Machine Learning"];
  const typingSpeed = 100;
  const pauseTime = 2000;

  // ======== HANDLE USEEFFECT ========
  useEffect(() => {
    const currentWord = textToType[wordIndex];

    const handleTyping = () => {
      if (!isDeleting && charIndex < currentWord.length) {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

      } else if (isDeleting && charIndex > 0) {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

      } else {
        
        if (!isDeleting) {
          setIsDeleting(true);

        } else {
          setIsDeleting(false);
          setCharIndex(0);
          setWordIndex((prev) => (prev + 1) % textToType.length);
        }
      }
    };

    let speed = isDeleting ? typingSpeed / 2 : typingSpeed;

    if (!isDeleting && charIndex === currentWord.length) {
      speed = pauseTime;
    } else if (isDeleting && charIndex === 0) {
      speed = 500;
    }

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex]);

  return (

    // ======== DISPLAY TYPING TEXT ========
    <span className="role text-white font-medium text-xl md:text-2xl">
      {text}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default TypingEffect;