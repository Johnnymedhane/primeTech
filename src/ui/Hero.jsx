import { HiPhone } from "react-icons/hi";
import Button from "./Button";
import styles from "./Hero.module.css";
function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>
            Step Into the World of Tech!
            <span>Learn. Create. Succeed.</span>
          </h1>

          <div className={styles.actions}>
            <Button className="primary" >Get Started</Button>
            <p><HiPhone /> 072-333-4455</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
