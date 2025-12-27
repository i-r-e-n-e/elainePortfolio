import styles from "./Hero.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaArtstation } from "react-icons/fa";
import { PiLinkedinLogoBold } from "react-icons/pi";

export default function Hero() {
  return (
    <section className={styles.hero}>
        <div className={styles.content}>
            <div className={styles.links}>
                <a href="*"><FaInstagram/></a>
                <a href="*"><FaArtstation /></a>
                <a href="*"><PiLinkedinLogoBold /></a>
            </div>
            <p>boighoust@gmail.com</p>
        </div>
    </section>
  );
}
