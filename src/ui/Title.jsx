import styles from './Title.module.css'

function Title({title}) {
  return (
    <div className={styles.titleContainer}>
    <span className={styles.lineLeft}></span>
    <h1 className={styles.title} dangerouslySetInnerHTML={{ __html: title }}>
    </h1>
    <span className={styles.lineRight}></span>
    </div>
  )
}

export default Title
