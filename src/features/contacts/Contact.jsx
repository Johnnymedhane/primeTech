
import Title from '../../ui/Title';
import ContactForm from './ContactForm';
import styles from './Contact.module.css';
import Map from './Map';

function Contact() {
  return (
    <section className={styles.contactSection}>
      <Title title="Get in Touch with Us" />
      
    
      <div className={styles.contactContainer}>
        <ContactForm />
        <div className={styles.contactInfo}>
          <Map />
        
        </div>
      </div>
      
    </section>
  );
}

export default Contact;
