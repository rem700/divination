import TarotCard from '../../types/tarotCard'
import Card from '../Card/Card'
import styles from './CardsLayout.module.css'

type Props = {
  selectedCards: TarotCard[]
}

function CardsLayout(props: Props) {
  const {selectedCards} = props;

  return (
    <div className={styles.cardsLayout}>
        {selectedCards.map((card, index) => (
        <div key={index} className={styles.card}>
          <h3>{card.name}</h3>
        </div>
      ))}
    </div>
  )
}

export default CardsLayout