import React from "react";
import styles from "./Ratings.module.css";
import Image from "next/image";
import Circle from "@/public/Images/halfCircle.webp";
import Dot from "@/public/Images/dot.webp";
import Crown from "@/public/Images/crown.webp";
import Key from "@/public/Images/key.webp";
import ThumbsUp from "@/public/Images/thumbsup.webp";
import Rings from "@/public/Images/rings.webp";
import String from "@/public/Images/String.png";

const Ratings = () => {
  return (
    // Ratings sections of our webapp
    <div className={styles.container}>
      <div className={styles.upper_content}>
        <div>
          Exploring  <span className={styles.blue}>Synastry</span>  , sharing  <span className={styles.blue}> Cosmic Energy</span> , and aligning through   <span className={styles.mix}>Real Connection</span> 
          
          
          
          {/* Meeting <span className={styles.blue}>New People</span> , Having New{" "}
          <br /> <span className={styles.blue}> Experience</span>,{" "}
          <span className={styles.mix}> Connecting with</span> <br />
          each others- */}
           &nbsp; that's &nbsp; 
          <span className={styles.pink}>
            what Dating
          </span>{" "}
          <br /> should be about!
          <div className={styles.crown_container}>
            <Image src={Crown} alt="Crown image" className={styles.crown} />
          </div>
        </div>
      </div>
      <div className={styles.lower_content}>
        <div className={styles.box}>
          <div>
            <div className={styles.image_container}>
              <Image src={ThumbsUp} alt="Icon" className={styles.icon} />
            </div>
          </div>
          <h5>High Rating</h5>
          <p>
            We're building Synterest to be a 5-star experience—designed with care, clarity, and cosmic in mind. Every detail, from intuitive design to meaningful matches, is shaped by real user feedback, smooth , and a fresh take on dating through astrology. We're not just launching an app—we're  a space people want to come back to..
          </p>
        </div>
        <div className={styles.box}>
          <div>
            <div className={styles.image_container}>
              <Image src={Rings} alt="Icon" className={styles.icon} />
            </div>
          </div>
          <h5>Find Matches Nearby</h5>
          <p>
            Your cosmic match might be closer than you think—Synterest helps you find aligned connections right in your area.
          </p>
        </div>
        <div className={styles.box}>
          <div>
            <div className={styles.image_container}>
              <Image src={Key} alt="Icon" className={styles.icon} />
            </div>
          </div>
          <h5>Safe & Private</h5>
          <p>
            Local matches, cosmic vibes, and AI that’s got your back.Synterest makes sure it's safe, private, and totally aligned.
          </p>
        </div>
      </div>
      <div className={styles.circleContainer}>
        <Image src={Circle} alt="Circular Design" className={styles.circle} />
      </div>
      <div className={styles.dotContainer}>
        <Image src={Dot} alt="Dot Design" className={styles.dot} />
      </div>
      <div className={styles.stringContainer}>
        <Image src={String} alt="String Design" className={styles.string} />
      </div>
    </div>
  );
};

export default Ratings;
