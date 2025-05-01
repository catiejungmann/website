import React from 'react';
import styles from './Download.module.css';
import DownloadImage from '@/public/Images/Download.png';
import Image from 'next/image';

const Download = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2>Ready To Find Your <span>Person?</span></h2>
        <p>Explore the Future of Finance, Governance, and Technology with our <br/> Decentralized Platform </p>
        <button>
            <Image src={DownloadImage} alt='Download Image' className={styles.downloadImage}/>
        </button>
      </div>
    </div>
  )
}

export default Download
