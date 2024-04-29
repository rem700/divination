import type TarotCard from "../types/tarotCard";

function getRandomCards(cardsArray: TarotCard[], numCards: number) {
    const shuffledCards = [...cardsArray].sort(() => 0.5 - Math.random());
    return shuffledCards.slice(0, numCards);
  }

export default getRandomCards