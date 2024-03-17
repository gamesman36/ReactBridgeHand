import React from 'react';
import Card from './Card';

const Hand = ({ cards }) => {
  return (
    <div>
      {cards.map(card => (
        <Card key={card.code} card={card} />
      ))}
    </div>
  );
};

export default Hand;