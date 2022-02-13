import React from "react";

const CardBoard = (props) => {
  const { flipCard, clearChosenCard, setWonCard, onWonCard } = props;
  const { cardData, cardsWon, cardsChosenId, cardsChosen } = props.memory;

  const chooseImage = (cardId) => {
    const cardIdStr = cardId.toString();

    if (cardsWon.includes(cardIdStr)) {
      return window.location.origin + "/images/white.png";
    } else if (cardsChosenId.includes(cardIdStr)) {
      return cardData[cardIdStr].img;
    } else {
      return window.location.origin + "/images/blank.png";
    }
  };

  const checkAlreadyWonCard = (cardId) => cardsWon.includes(cardId);

  const handleFlipCard = (cardId) => flipCard(cardId);

  return cardData.map((card, key) => {
    return (
      <img
        key={key}
        src={chooseImage(key)}
        data-id={key}
        onClick={(event) => {
          let cardId = event.target.getAttribute("data-id");

          if (!checkAlreadyWonCard(cardId)) {
            handleFlipCard(cardId);
          }
        }}
      />
    );
  });
};

export default CardBoard;
