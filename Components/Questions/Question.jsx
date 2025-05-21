"use client";
import React, { useState } from "react";
import styles from "./Question.module.css";

const faqs = [
  {
    question: "What is Synterest?",
    answer:
      "Synterest is an innovative dating app that blends astrology with AI to help users find meaningful, locally-based connections. Unlike traditional dating platforms, Synterest prioritizes compatibility by considering astrological factors such as Mars and Venus signs, personality traits, and birth charts. An AI-powered voice assistant guides users through the onboarding process, offering personalized recommendations and conversation starters based on individual preferences and astrological insights.",
  },
  {
    question: "Is Synterest Free",
    answer:
      "Yes, Synterest is free for base engagement. You can download the app, create your profile, and start exploring matches without any cost.",
  },
  {
    question: "What kind of relationships if Synterest for?",
    answer:
      "Synterest is for anyone looking to build meaningful, authentic connections—whether you’re seeking friendship, casual dating, or a serious, long-term relationship.",
  },
  {
    question: "How do I get started?",
    answer: `1. Download the Synterest app from the App Store.<br/>2. Sign up quickly and smoothly by entering your details and birth info. <br/>3. Let our AI guide you through setting your astrology-based preferences. <br/>4. Start browsing your local, cosmic matches and enjoy AI-powered chat starters to keep the conversation flowing!`,
  },
  {
    question: "Is my data secure?",
    answer:
      "We’re dedicated to covering all grounds to ensure every interaction and meeting on Synterest is secure, private, and genuine.",
  },
];

const Question = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.upper_content}>
        <span>Faqs</span>
      </div>
      <br />
      <div className={styles.middle_content}>
        <h2>
          Your Questions About <br /> Synterest <span>Answered</span>{" "}
        </h2>
        <p>
          Discover how Synterest can revolutionize the way you find meaningful
          connections.
        </p>
      </div>
      <div className={styles.lower_content}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faq_item}>
            <div
              className={styles.faq_question}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </div>
            <div
              className={`${styles.faq_answer} ${
                activeIndex === index ? styles.active : ""
              }`}
            >
              {faq.answer.split("<br/>").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
