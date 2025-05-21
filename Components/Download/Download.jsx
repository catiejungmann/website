import React from 'react';
import styles from './Download.module.css';
import DownloadImage from '@/public/Images/Download2.png';
import Image from 'next/image';

const Download = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2>Ready To Find Your <span>Person?</span></h2>
        <p>Explore the Future of Love, Connection, and Astrology with Synterest 
 <br/> — Your Cosmic Matchmaker. </p>
        <button>
            <Image src={DownloadImage} alt='Download Image' className={styles.downloadImage}/>
            Download Synterest
        </button>
      </div>
    </div>
  )
}

export default Download
