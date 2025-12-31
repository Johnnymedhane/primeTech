import { useEffect, useRef } from "react";
import Button from "./Button";
import styles from "./CardList.module.css";

function CardList({ cardData, ButtonText, onButtonClick }) {
  const ref = useRef();

  useEffect(function () {
    const card = ref.current;
    if (!ref.current) return;
    const observer = new IntersectionObserver(
     ([entry]) => {
        if (entry.isIntersecting) {
          card.classList.add("animate");
          observer.unobserve(card);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  return (
    <li className={styles.card} ref={ref}>
      <div className={styles.imageContainer}>
        <img src={cardData.image} alt={cardData.title} />
      </div>
      <h3>{cardData.title}</h3>
      <p>{cardData.description}</p>
      <Button onClick={onButtonClick}>{ButtonText}</Button>
    </li>
  );
}

export default CardList;
