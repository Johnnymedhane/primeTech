



import styles from "./Testimonials.module.css";
import Title from "../../ui/Title";

function Testimonials() {
  return (
    <section className={styles.testimonialsSection}>
      <Title title={`What our <span>students</span> say`} />
      <div className={styles.testimonialsContainer}>
        <div className={styles.contentBox}>
           <span className={styles.quoteIcon}>❝</span>
          <p className={styles.testimonialText}> 
            The best courses I've ever taken! I learned so much and got personal guidance until i landed a tech job.
          <span className={styles.author}>- Ori C.., Course Graduate </span>
          </p>
        </div>
        <div className={styles.imageBox}>
          <img src="images/testimonial.png" alt="Student Testimonial" />
        </div>
        <div className={styles.contentBox}>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
