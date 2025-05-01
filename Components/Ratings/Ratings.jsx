import React from 'react'
import styles from './Ratings.module.css';
import Image from 'next/image';
import Circle from '@/public/Images/halfCircle.webp'
import Dot from '@/public/Images/dot.webp';
import Crown from '@/public/Images/crown.webp';
import Key from '@/public/Images/key.webp';
import ThumbsUp from '@/public/Images/thumbsup.webp';
import Rings from '@/public/Images/rings.webp';
import String from '@/public/Images/String.png'


const Ratings = () => {
  return (
    <div className={styles.container}>
      <div className={styles.upper_content}>

        <div>
            Meeting <span className={styles.blue}>New People</span> , Having New <br/> <span className={styles.blue}> Experience</span>, <span className={styles.mix}> Connecting with</span> <br/>each others- that's <span className={styles.pink}>what  Dating</span> <br/> should be about!
            <div className={styles.crown_container}>
            <Image src={Crown} alt='Crown image' className={styles.crown}/>
        </div>
        </div>
       
      </div>
      <div className={styles.lower_content}>
            <div className={styles.box}>
                <div>
                    <div className={styles.image_container}>
                    <Image src={ThumbsUp} alt='Icon' className={styles.icon}/>
                    </div>
                </div>
                <h5>High Rate</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque optio maiores eveniet sequi quaerat facere quos, deleniti non accusantium accusamus.</p>
            </div>
            <div className={styles.box}>
                <div>
                    <div className={styles.image_container}>
                    <Image src={Rings} alt='Icon' className={styles.icon}/>
                    </div>
                </div>
                <h5>High Rate</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque optio maiores eveniet sequi quaerat facere quos, deleniti non accusantium accusamus.</p>
            </div>
            <div className={styles.box}>
                <div>
                    <div className={styles.image_container}>
                    <Image src={Key} alt='Icon' className={styles.icon}/>

                    </div>
                </div>
                <h5>High Rate</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque optio maiores eveniet sequi quaerat facere quos, deleniti non accusantium accusamus.</p>
            </div>
      </div>
      <div className={styles.circleContainer}>
        <Image src={Circle} alt="Circular Design" className={styles.circle}/>
      </div>
      <div className={styles.dotContainer}>
      <Image src={Dot} alt="Dot Design" className={styles.dot}/>
      </div>
      <div className={styles.stringContainer}>
      <Image src={String} alt="String Design" className={styles.string}/>
      </div>
    </div>
  )
}

export default Ratings
