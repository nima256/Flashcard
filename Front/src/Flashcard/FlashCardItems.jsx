function FlashCardItems({ flashcard }) {
  return (
    <>
      <li key={flashcard.vocabulary}>
        <h2>{flashcard.vocabulary}</h2>
        <h3>Synonym :{flashcard.synonym}</h3>
      </li>
    </>
  );
}

export default FlashCardItems;
