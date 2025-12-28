import styles from "./Spinner.module.css";

function Spinner({size = "medium"}) {
  return (
    <div className={`${styles.spinnerContainer} ${styles[size]}`}>
      <div className={styles.loader}></div>
    </div>
  );
}

export default Spinner;
