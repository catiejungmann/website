import React from "react";
import styles from "./About.module.css";
import AboutImage from '@/public/Images/About.png';
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.upper_container}>
        <div className={styles.upper_content}>
          <h2>Get to  <span>know</span> About us more</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam ab
            quos atque. Tempora, incidunt consectetur facilis architecto dolorum
            accusantium blanditiis perspiciatis sequi inventore reiciendis
            quibusdam sit expedita, vitae molestias id earum culpa hic nulla,
            aliquid magni. Facere!
          </p>
        </div>
      </div>
      <div className={styles.lower_container}>
        {[
          { number: "01", title: "How Can I Create an Account" },
          { number: "02", title: "Set Preferences" },
          { number: "03", title: "Match & Chat" },
          { number: "04", title: "Meet IRL or online" },
        ].map((item, index) => (
          <div key={index} className={styles.step}>
            <div className={styles.stepNumber}>{item.number}</div>
            <div className={styles.stepContent}>
              <h3>{item.title}</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Vestibulum nulla sit
                vitae porta diam platea tincidunt at diam. Erat tristique mauris
                urna tempus.
              </p>
            </div>
            <div className={styles.arrow}>&#8600;</div>{" "}
            {/* Unicode right arrow for now */}
          </div>
        ))}
      </div>
      <div className={styles.image_container}>
        <Image src={AboutImage} alt="About us image of a phone" className={styles.image}/>
      </div>

    </div>
  );
};

export default About;
