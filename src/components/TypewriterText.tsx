"use client";

import { useEffect, useState } from "react";

type TypewriterTextProps = {
  words: string[];
};

export default function TypewriterText({ words }: TypewriterTextProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    const typingSpeed = isDeleting ? 45 : 90;
    const pauseDuration = 1100;

    const timer = window.setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentWord.slice(0, displayedText.length + 1);
        setDisplayedText(nextText);

        if (nextText === currentWord) {
          window.setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        const nextText = currentWord.slice(0, Math.max(0, displayedText.length - 1));
        setDisplayedText(nextText);

        if (nextText.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => window.clearTimeout(timer);
  }, [displayedText, isDeleting, wordIndex, words]);

  return (
    <span className="typewriter-text">
      {displayedText || "\u00A0"}
      <span className="typewriter-cursor" aria-hidden="true" />
    </span>
  );
}
