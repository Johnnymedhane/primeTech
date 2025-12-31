import { useForm } from "react-hook-form";
import styles from "./Contact.module.css";
import toast from "react-hot-toast";
// import { sendContactForm } from "../../service/contactApi";
import { useState } from "react";
import Button from "../../ui/Button";
import { PHONE_NUMBER } from "../../utils/constant";
import { HiPhone } from "react-icons/hi";
import { RiWhatsappFill } from "react-icons/ri";

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    const formData = {
      clientName: data.fullName,
      phone: data.phone,
      email: data.email,
      message: data.message || "",
    };
    setIsSubmitting(true);

    try {
      //  i will connect it the real api later
      // await sendContactForm(formData);
      setTimeout(() => {
        setIsSubmitting(false);
        console.log("Form data submitted:", formData);
        toast.success("Thank you! Your message has been sent successfully.");
        reset();
      }, 5000);
    } catch (error) {
      console.error("Error details:", error.message);
      toast.error("Failed to send message. Please try again later.");
    }
    // } finally {
    //   setIsSubmitting(false);
    // }
  }

  function onError(errors) {
    console.error("Form errors:", errors);
  }

  return (
    <form
      className={styles.contactForm}
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <div className={styles.formGroup}>
        <input
          type="text"
          id="fullName"
          {...register("fullName", {
            required: "Full name is required",
          })}
          placeholder="Full Name"
          disabled={isSubmitting}
        />
        {errors.fullName && (
          <span className={styles.error}>{errors.fullName.message}</span>
        )}
      </div>

      <div className={styles.formGroup}>
        <input
          type="tel"
          id="phone"
          {...register("phone", {
            required: "Enter valid phone number",
            pattern: {
              value: /^\+?[0-9\s\-()]{7,15}$/,
              message: "Invalid phone number",
            },
          })}
          placeholder="Phone Number"
          disabled={isSubmitting}
        />
        {errors.phone && (
          <span className={styles.error}>{errors.phone.message}</span>
        )}
      </div>

      <div className={styles.formGroup}>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
          placeholder="Email Address"
          disabled={isSubmitting}
        />
        {errors.email && (
          <span className={styles.error}>{errors.email.message}</span>
        )}
      </div>

      <div className={` ${styles.formGroup} ${styles.fullWidth}`}>
        <textarea
          id="message"
          {...register("message")}
          rows="5"
          placeholder="Message"
          disabled={isSubmitting}
        />
      </div>
      <div className={`${styles.formFooter} ${styles.fullWidth}`}>
        <Button
          type="submit"
          className={styles.submitBtn}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
        <a className={styles.contactPhone} href={`tel:${PHONE_NUMBER}`}>
          <p>{PHONE_NUMBER}</p>
          <HiPhone />
        </a>
        <a className={styles.whatsapp} href={`https://wa.me/${PHONE_NUMBER}`}>
          <p> send Message </p>
          <RiWhatsappFill />
        </a>
      </div>
    </form>
  );
}

export default ContactForm;
