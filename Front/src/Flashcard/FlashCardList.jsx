import FlashCardItems from "./FlashCardItems";

function FlashCardList({ loadedFlashcards }) {
  return (
    <>
      <ul>
        {loadedFlashcards.map((flashcard) => (
          <FlashCardItems flashcard={flashcard} key={flashcard.vocabulary} />
        ))}
      </ul>
    </>
  );
}

export default FlashCardList;
