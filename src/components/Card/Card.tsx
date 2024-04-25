import styles from './Card.module.css'
import cardBack from '../../img/card.png'

function Card() {
  return (
    <div className={styles.card}>
        <img src={cardBack} alt="card back" />
    </div>
  )
}

export default Card