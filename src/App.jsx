import React, { useState, useEffect } from 'react';
import Hand from './components/Hand';

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchAndSortCards = async () => {
      await fetch('https://deckofcardsapi.com/api/deck/x69so4m0tc58/shuffle/');
      const response = await fetch('https://deckofcardsapi.com/api/deck/x69so4m0tc58/draw/?count=13');
      let data = await response.json();

      const customSort = (a, b) => {
        const suitsOrder = { 'S': 4, 'H': 3, 'C': 2, 'D': 1 };
        const rankOrder = { 'A': 14, 'K': 13, 'Q': 12, 'J': 11, '10': 10, '9': 9, '8': 8, '7': 7, '6': 6, '5': 5, '4': 4, '3': 3, '2': 2 };

        const rankA = a.code[0];
        const rankB = b.code[0];
        const suitA = a.code[1];
        const suitB = b.code[1];

        return suitsOrder[suitB] - suitsOrder[suitA] || rankOrder[rankB] - rankOrder[rankA];
      };

      data.cards.sort(customSort);

      setCards(data.cards);
    };

    fetchAndSortCards();
  }, []);

  return (
    <div>
      <h1>Hand of Cards</h1>
      <Hand cards={cards} />
    </div>
  );
}

export default App;