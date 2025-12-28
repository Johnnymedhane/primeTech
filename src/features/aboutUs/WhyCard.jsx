
import styles from './WhyChooseUs.module.css'
function WhyCard({icon, title}) {
  return (
    <li className={styles.whyItem}>
      <div className={styles.icon}>
        {icon}
      </div>
      <p className={styles.title}>
        {title}
      </p>
    </li>
  )
}

export default WhyCard
