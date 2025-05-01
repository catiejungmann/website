import styles from "./page.module.css";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import Download from "@/Components/Download/Download";
import Question from "@/Components/Questions/Question";
import Testimonials from "@/Components/Testimonials/Testimonials";
import About from "@/Components/AboutUs/About";
import Landing from "@/Components/Landing/Landing";
import Ratings from "@/Components/Ratings/Ratings";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className={styles.navigation}>
        <Landing/>
        <Ratings/>
        <About/>
        <Testimonials/>
        <Question/>
        <Download />
        <Footer />
      </div>
    </div>
  );
}
