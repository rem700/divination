import Card from '../Card/Card'
import styles from './CardsLayout.module.css'

function CardsLayout() {
  return (
    <div className={styles.cardsLayout}>
        <Card />
        <Card />
        <Card />
    </div>
  )
}

export default CardsLayout