import React from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';
import Logo from '@/public/Images/Main_Logo.png';

const Footer = () => {
  return (
    <div className={styles.footer_container}>
        <div className={styles.footer}>
            <div className={styles.leftSection}>
              <div className={styles.image_section}>
              <Image src={Logo} alt='Main Logo of synterest' className={styles.image}/>
              </div>
              <div className={styles.left_content}>
                <h2>Join Our Newsletter</h2>
                <p>Signup to our mailing list below and be the first to know about new updates. Don't worry, we hate spam too.</p>
                <input type="text" placeholder='Your Email Address' />
                <button>Get Notified</button>

              </div>
            </div>
            <div className={styles.rightSection}>
              <div className={styles.right_content}>
                <div className={styles.links}>
                  <p>Links</p>
                  <p>Home</p>
                  <p>Feature</p>
                  <p>How to Works</p>
                </div>
                <div className={styles.links2}>
                  <p>Information</p>
                  <p>FAQ</p>
                  <p>Contact Us</p>
                </div>
              </div>
            </div>

        </div>
    </div>
  )
}

export default Footer
