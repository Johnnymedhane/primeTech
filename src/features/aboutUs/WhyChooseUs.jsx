import styles from "./WhyChooseUs.module.css";
import Title from "../../ui/Title";
import WhyCard from "./WhyCard";
import { FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";
import { MdOutlineAutoGraph } from "react-icons/md";

function WhyChooseUs() {
  return (
    <section 
     className={styles.whyChooseUsSection}
    >
      <Title  title="Why PrimeTech?" />
      <ul className={styles.whyChooseUs}>
        <WhyCard
          icon={<FaChalkboardTeacher />}
          title="Experienced Industry Instructors"
        />

        <WhyCard
          icon={<FaUserGraduate />}
          title="Personal Guidance for Each Student"
        />

        <WhyCard
          icon={<MdOutlineAutoGraph />}
          title="Practical & Up-to-Date Learning"
        />
      </ul>
    </section>
  );
}

export default WhyChooseUs;
