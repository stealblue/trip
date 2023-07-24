// import update from "immutability-helper";
import { useCallback } from "react";
import { Card } from "./Card";

const style = {
  width: 250,
};
export const Container = ({ cards, moveCard }) => {
  {
    const renderCard = useCallback((card, index) => {
      return (
        <Card
          key={card.items[0].title}
          index={index}
          id={card.items[0].contentId}
          text={card.items[0].title}
          moveCard={moveCard}
        />
      );
    }, []);
    return (
      <>
        <div style={style}>{cards?.map((card, i) => renderCard(card, i))}</div>
      </>
    );
  }
};
