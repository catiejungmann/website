import React from "react";
import styles from "./Landing.module.css";
import Smily from "@/public/Images/Smily.png";
import Group from "@/public/Images/Group.png";
import Image1 from "@/public/Images/Image1.png";
import Image2 from "@/public/Images/Image2.png";
import Image3 from "@/public/Images/Image3.png";
import Gradient from '@/public/Images/back_gradient.webp';

import Image from "next/image";
import DownloadImage from "@/public/Images/Download.png";

const Landing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left_container}>
        <h5>Find Your <span>Love</span></h5>
        <h1>By Being <span>Yourself</span></h1>
        <h4>With SYNTEREST</h4>
        <p>
          We designed a platform for people to find their love without being
          judged
        </p>
        <div className={styles.flex_container}>
          <div className={styles.first}>
            <Image
              src={Group}
              alt="Group people image"
              className={styles.group}
            />
          </div>
          <div className={styles.second}>
            <h4>20K+</h4>
            <p>Members</p>
          </div>
          <div className={styles.third}>
            <Image src={Smily} alt="SMily image" className={styles.smily} />
            <div>
              <h4>Perfect</h4>
              <p>Matchs</p>
            </div>
          </div>
        </div>
        <button>
          <Image
            src={DownloadImage}
            alt="Download Image"
            className={styles.downloadImage}
          />
        </button>
      </div>
      <div className={styles.right_container}>
        <div className={styles.image_holder}>

        <div className={styles.first_image}>
          <Image src={Image1} alt="First Image" className={styles.image} />
        </div>
        <div className={styles.second_image}>
          <Image src={Image2} alt="Second Image" className={styles.image}  />
        </div>
        <div className={styles.third_image}>
          <Image src={Image3} alt="Third Image" className={styles.image} />
        </div>
        
        </div>
        <div className={styles.gradientContainer}>
          <Image src={Gradient} alt="Gradient IMage" className={styles.gradient}/>
        </div>

        {/* heyy */}
      </div>
    </div>
  );
};

export default Landing;
