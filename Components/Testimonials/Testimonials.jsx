// import React from 'react';
// import styles from './Testimonails.module.css';

// const Testimonials = () => {
//   return (
//     <div className={styles.container}>
//     <div className={styles.upper_content}>
//       <span>Reviews</span>
//     </div>
//     <div className={styles.middle_content}>
//       <h2>What People Think <br /> About Synterest </h2>
//     </div>
//     <div className={styles.lower_content}>

//     </div>
//   </div>
//   )
// }

// export default Testimonials

"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./Testimonails.module.css";
import { useKeenSlider } from "keen-slider/react";
import DemoImage from "@/public/Images/placeholder.jpg";
import Image from "next/image";
import DoubleQuotes from "@/public/Images/doubleQuotes.webp";
import Circle from "@/public/Images/halfCircle.webp";

const Testimonials = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Check if window is defined (not during SSR)
    if (typeof window !== "undefined") {
      // Function to handle resizing
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      // Initial call to set initial window size
      handleResize();

      // Event listener for window resize
      window.addEventListener("resize", handleResize);

      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  let preview = 1.2;
  let padding_class = "px-8";
  if (windowSize.width >= 500 && windowSize.width <= 900) {
    preview = 3;
    padding_class = "px-20";
  } else if (windowSize.width >= 900 && windowSize.width <= 1600) {
    preview = 3;
    padding_class = "px-80";
  } else if (windowSize.width >= 1600) {
    preview = 1.4;
    padding_class = "px-80";
  }

  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: preview,
        spacing: 5,
        center: true,
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
 
  
  return (
    <div className={styles.container}>
      <div className={styles.upper_content}>
        <span>Reviews</span>
      </div>
      <div className={styles.middle_content}>
        <h2>
          What People Think <br /> About <span>Synterest</span>
        </h2>
      </div>

      <div className={styles.lower_content}>
        <div
          ref={sliderRef}
          className={`keen-slider ${styles["main_slider"]} ${padding_class}`}
        >
          <div className={` keen-slider__slide `}>
            <div className={styles.slider_container}>
              <div className={styles.upper_div}>
                <div className={styles.image_container}>
                  <Image
                    src={DemoImage}
                    alt="Dmeo image"
                    className={styles.image}
                  />
                </div>
                <div className={styles.nameInfo}>
                  <h4>Leo Messi</h4>
                  <p>06 Month With Us</p>
                </div>
                <div className={styles.quotes_container}>
                  <Image
                    src={DoubleQuotes}
                    alt="Double Quotes"
                    className={styles.quotes}
                  />
                </div>
              </div>
              <div className={styles.middle_div}>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet saepe exercitationem laboriosam volupttaque."
              </div>
              <div className={styles.lower_div}>⭐⭐⭐⭐⭐</div>
            </div>
          </div>
          <div className={` keen-slider__slide `}>
            <div className={styles.slider_container}>
              <div className={styles.upper_div}>
                <div className={styles.image_container}>
                  <Image
                    src={DemoImage}
                    alt="Dmeo image"
                    className={styles.image}
                  />
                </div>
                <div className={styles.nameInfo}>
                  <h4>Leo Messi</h4>
                  <p>06 Month With Us</p>
                </div>
                <div className={styles.quotes_container}>
                  <Image
                    src={DoubleQuotes}
                    alt="Double Quotes"
                    className={styles.quotes}
                  />
                </div>
              </div>
              <div className={styles.middle_div}>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet saepe exercitationem laboriosam volupttaque."
              </div>
              <div className={styles.lower_div}>⭐⭐⭐⭐⭐</div>
            </div>
          </div>
          <div className={` keen-slider__slide `}>
            <div className={styles.slider_container}>
              <div className={styles.upper_div}>
                <div className={styles.image_container}>
                  <Image
                    src={DemoImage}
                    alt="Dmeo image"
                    className={styles.image}
                  />
                </div>
                <div className={styles.nameInfo}>
                  <h4>Leo Messi</h4>
                  <p>06 Month With Us</p>
                </div>
                <div className={styles.quotes_container}>
                  <Image
                    src={DoubleQuotes}
                    alt="Double Quotes"
                    className={styles.quotes}
                  />
                </div>
              </div>
              <div className={styles.middle_div}>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet saepe exercitationem laboriosam volupttaque."
              </div>
              <div className={styles.lower_div}>⭐⭐⭐⭐⭐</div>
            </div>
          </div>
          <div className={` keen-slider__slide `}>
            <div className={styles.slider_container}>
              <div className={styles.upper_div}>
                <div className={styles.image_container}>
                  <Image
                    src={DemoImage}
                    alt="Dmeo image"
                    className={styles.image}
                  />
                </div>
                <div className={styles.nameInfo}>
                  <h4>Leo Messi</h4>
                  <p>06 Month With Us</p>
                </div>
                <div className={styles.quotes_container}>
                  <Image
                    src={DoubleQuotes}
                    alt="Double Quotes"
                    className={styles.quotes}
                  />
                </div>
              </div>
              <div className={styles.middle_div}>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet saepe exercitationem laboriosam volupttaque."
              </div>
              <div className={styles.lower_div}>⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.arrowsContainer}>
        <button
          className={styles.arrow}
          onClick={() => sliderRef.current?.prev()}
        >
          ←
        </button>
        <button
          className={styles.arrow}
          onClick={() => sliderRef.current?.next()}
        >
          →
        </button>
      </div>

      <div className={styles.circleContainer}>
        <Image className={styles.circle} alt="Circle Image" src={Circle} />
      </div>
    </div>
  );
};

export default Testimonials;


// "use client";
// import React, { useState, useEffect } from "react";
// import styles from "./Testimonails.module.css";
// import { useKeenSlider } from "keen-slider/react";
// import DemoImage from "@/public/Images/placeholder.jpg";
// import Image from "next/image";
// import DoubleQuotes from "@/public/Images/doubleQuotes.webp";
// import Circle from "@/public/Images/halfCircle.webp";

// const Testimonials = () => {
//   const [windowSize, setWindowSize] = useState({
//     width: undefined,
//     height: undefined,
//   });

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const handleResize = () => {
//         setWindowSize({
//           width: window.innerWidth,
//           height: window.innerHeight,
//         });
//       };

//       handleResize();
//       window.addEventListener("resize", handleResize);
//       return () => window.removeEventListener("resize", handleResize);
//     }
//   }, []);

//   let preview = 1.2;
//   let padding_class = "px-8";
//   if (windowSize.width >= 500 && windowSize.width <= 900) {
//     preview = 3;
//     padding_class = "px-20";
//   } else if (windowSize.width >= 900 && windowSize.width <= 1600) {
//     preview = 3;
//     padding_class = "px-80";
//   } else if (windowSize.width >= 1600) {
//     preview = 1.4;
//     padding_class = "px-80";
//   }

//   const slider = useKeenSlider<HTMLDivElement>({
//     loop: true,
//     slides: {
//       perView: preview,
//       spacing: 5,
//       center: true,
//     },
//     created(sliderInstance) {
//       let timeout: NodeJS.Timeout;
//       let mouseOver = false;

//       function clearNextTimeout() {
//         clearTimeout(timeout);
//       }

//       function nextTimeout() {
//         clearTimeout(timeout);
//         if (mouseOver) return;
//         timeout = setTimeout(() => {
//           sliderInstance.next();
//         }, 2000);
//       }

//       sliderInstance.container.addEventListener("mouseover", () => {
//         mouseOver = true;
//         clearNextTimeout();
//       });

//       sliderInstance.container.addEventListener("mouseout", () => {
//         mouseOver = false;
//         nextTimeout();
//       });

//       nextTimeout();
//     },
//     dragStarted() {
//       // Pause autoplay on drag
//     },
//     animationEnded(sliderInstance) {
//       // Resume autoplay after slide change
//       setTimeout(() => {
//         sliderInstance.next();
//       }, 2000);
//     },
//   });

//   return (
//     <div className={styles.container}>
//       <div className={styles.upper_content}>
//         <span>Reviews</span>
//       </div>
//       <div className={styles.middle_content}>
//         <h2>
//           What People Think <br /> About Synterest
//         </h2>
//       </div>

//       <div className={styles.lower_content}>
//         <div
//           ref={slider.ref}
//           className={`keen-slider ${styles["main_slider"]} ${padding_class}`}
//         >
//           {[...Array(4)].map((_, index) => (
//             <div className="keen-slider__slide" key={index}>
//               <div className={styles.slider_container}>
//                 <div className={styles.upper_div}>
//                   <div className={styles.image_container}>
//                     <Image
//                       src={DemoImage}
//                       alt="Demo image"
//                       className={styles.image}
//                     />
//                   </div>
//                   <div className={styles.nameInfo}>
//                     <h4>Leo Messi</h4>
//                     <p>06 Month With Us</p>
//                   </div>
//                   <div className={styles.quotes_container}>
//                     <Image
//                       src={DoubleQuotes}
//                       alt="Double Quotes"
//                       className={styles.quotes}
//                     />
//                   </div>
//                 </div>
//                 <div className={styles.middle_div}>
//                   "Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Eveniet saepe exercitationem laboriosam volupttaque."
//                 </div>
//                 <div className={styles.lower_div}>⭐⭐⭐⭐⭐</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className={styles.arrowsContainer}>
//         <button className={styles.arrow} onClick={() => slider.current?.prev()}>
//           ←
//         </button>
//         <button className={styles.arrow} onClick={() => slider.current?.next()}>
//           →
//         </button>
//       </div>

//       <div className={styles.circleContainer}>
//         <Image className={styles.circle} alt="Circle Image" src={Circle} />
//       </div>
//     </div>
//   );
// };

// export default Testimonials;
