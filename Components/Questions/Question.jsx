"use client";
import React, { useState } from 'react';
import styles from './Question.module.css';

const faqs = [
  {
    question: 'What is Synterest?',
    answer: 'Synterest is a platform that helps users manage and grow relationships efficiently. (Lorem text...)'
  },
  {
    question: 'Is Synterent free?',
    answer: 'Yes, Synterent offers a free version with essential features. (Lorem text...)'
  },
  {
    question: 'What kind of relationships is Synterent for?',
    answer: 'It’s designed for professional, personal, and customer-based relationships. (Lorem text...)'
  },
  {
    question: 'How do I get started?',
    answer: 'You can sign up, set up your profile, and begin using the dashboard. (Lorem text...)'
  },
  {
    question: 'Is it Secure my data?',
    answer: 'Yes, your data is encrypted and securely stored on our servers. (Lorem text...)'
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
      <div className={styles.middle_content}>
        <h2>Your Questions About <br /> Synterest <span>Answered</span> </h2>
        <p>Learn more about how Sync can transform your sales management.</p>
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
                activeIndex === index ? styles.active : ''
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
