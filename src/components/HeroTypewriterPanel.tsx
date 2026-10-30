"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    word: "Artificial Intelligence",
    image: "/hero/hero-topic-ai.jpg",
    icon: "/icons/spring-ai.png",
    tag: "AI track",
    caption: "Build LLM features and ship AI products with mentors.",
    highlight: "Live mentoring",
    meta: "Projects · Spring AI · LLMs"
  },
  {
    word: "Cloud Computing",
    image: "/hero/hero-topic-cloud.jpg",
    icon: "/icons/aws-cloud.png",
    tag: "AWS track",
    caption: "Design, deploy, and operate real systems on AWS.",
    highlight: "Cloud labs",
    meta: "Hands-on · AWS · Deploy"
  },
  {
    word: "Full Stack Development",
    image: "/hero/hero-topic-fullstack.jpg",
    icon: "/icons/java.png",
    tag: "Java track",
    caption: "From APIs to UI — project-ready full stack skills.",
    highlight: "Job-ready builds",
    meta: "Java · Spring · Frontend"
  },
  {
    word: "Data Engineering",
    image: "/hero/hero-topic-data.jpg",
    icon: "/icons/tag-cloud-projects.png",
    tag: "Data track",
    caption: "Pipeline, store, and scale data for real workloads.",
    highlight: "Pipeline practice",
    meta: "ETL · Cloud · Scale"
  }
] as const;

export default function HeroTypewriterPanel() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const active = slides[wordIndex % slides.length];

  useEffect(() => {
    const currentWord = slides[wordIndex % slides.length].word;
    const typingSpeed = isDeleting ? 45 : 90;
    const pauseDuration = 1600;

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
          setWordIndex((prev) => (prev + 1) % slides.length);
        }
      }
    }, typingSpeed);

    return () => window.clearTimeout(timer);
  }, [displayedText, isDeleting, wordIndex]);

  return (
    <span className="hero-typewriter-panel">
      <span className="typewriter-text">
        {displayedText || "\u00A0"}
        <span className="typewriter-cursor" aria-hidden="true" />
      </span>

      <span className="hero-topic-card" key={active.word}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero-topic-card-image"
          src={active.image}
          alt=""
          width={640}
          height={360}
        />
        <span className="hero-topic-card-scrim" aria-hidden="true" />

        <span className="hero-topic-card-top">
          <span className="hero-topic-card-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={active.icon} alt="" width={28} height={28} />
          </span>
          <span className="hero-topic-card-live">
            <span className="hero-topic-card-live-dot" aria-hidden="true" />
            {active.highlight}
          </span>
        </span>

        <span className="hero-topic-card-copy">
          <span className="hero-topic-card-tag">{active.tag}</span>
          <span className="hero-topic-card-caption">{active.caption}</span>
          <span className="hero-topic-card-meta">{active.meta}</span>
        </span>
      </span>
    </span>
  );
}
