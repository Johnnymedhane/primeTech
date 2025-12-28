import Button from './Button'
import styles from './CardList.module.css'

function CardList({cardData, ButtonText, onButtonClick}) {

  return (
   <li className={styles.card}>
      <div className={styles.imageContainer}>
      <img src={cardData.image} alt={cardData.title} />
      </div>
      <h3>{cardData.title}</h3>
      <p>{cardData.description}</p>
      <Button onClick={onButtonClick}>{ButtonText}</Button>
    
    </li>
  )
}

export default CardList
