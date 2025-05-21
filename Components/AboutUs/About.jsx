import React from "react";
import styles from "./About.module.css";
import AboutImage from "@/public/Images/About.png";
import Image from "next/image";

const About = () => {


  return (
    <div className={styles.container}>
      <div className={styles.upper_container}>
        <div className={styles.upper_content}>
          <h2>
            Get to <span>know</span> About us more
          </h2>
          <p>
            At Synterest, we believe dating should be deeper than just swiping.
            That s why we use astrology to help you find matches who truly
            alignwith your energy—locally and cosmically.Our AI-powered chatbot
            is here to guide you, answer your questions, and help you navigate
            your journey. And when it comes to your data, privacy and respect
            are our top priorities.We re not just building a dating app—we re
            creating a space for real, meaningful connections written in the
            stars.
          </p>
        </div>
      </div>
      <div className={styles.lower_container}>
        {[
          { number: "01", title: "How Can I Create an Account", desc:"Getting started on Synterest is easy! Just download the app from the App Store, and signing up is quick and smooth—no complicated steps, just a few taps to enter your info and birth details." },
          { number: "02", title: "Set Preferences",desc:" Choosing your ideal cosmic love on Synterest is simple — our smart AI guides you through setting astrology-based preferences to help find matches that truly vibe with your unique energy" },
          { number: "03", title: "Match & Chat",desc:"Not sure how to start the convo? Synterest s AI has your back with personalized opening lines and date ideas based on your unique cosmic connection—making it easy to break the ice and keep the vibe flowing."  },
          { number: "04", title: "Meet IRL or online", desc:" At Synterest, your safety is our priority. We re focused on integrating thorough user verification soon to ensure every connection is genuine and every meeting is secure." },
        ].map((item, index) => (
          <div key={index} className={styles.step}>
            <div className={styles.stepNumber}>{item.number}</div>
            <div className={styles.stepContent}>
              <h3>{item.title}</h3>
              <p>
                {item.desc}
              </p>
            </div>
            <div className={styles.arrow}>&#8600;</div>{" "}
            {/* Unicode right arrow for now */}
          </div>
        ))}
      </div>
      <div className={styles.image_container}>
        <Image
          src={AboutImage}
          alt="About us image of a phone"
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default About;
