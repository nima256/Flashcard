import { useEffect, useState } from "react";
import FlashCardList from "./FlashCardList";
import NewFlashcard from "./NewFlashcard";

function Flashcards() {
  const [loadedFlashcards, setLoadedFlashcards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchFlashcards = async () => {
      setIsLoading(true);
      const response = await fetch("http://localhost:8000/flashcards");

      const responseData = await response.json();

      setLoadedFlashcards(responseData.flashcards);
      setIsLoading(false);
    };

    fetchFlashcards();
  }, []);

  async function addFlashcardHandler(flashcardVocabulary, flashcardSynonym) {
    try {
      const newFlashcard = {
        flashcardVocabulary,
        flashcardSynonym: flashcardSynonym,
      };
      let hasError = false;
      const response = await fetch("http://localhost:8000/new/flashcard", {
        method: "POST",
        body: JSON.stringify(newFlashcard),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        hasError = true;
      }
      const responseData = await response.json();

      if (hasError) {
        throw new Error(responseData.message);
      }

      setLoadedFlashcards((prevFlashcards) => {
        return prevFlashcards.concat({
          ...newFlashcard,
          id: responseData.flashcard._id,
        });
      });
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      {isLoading && <p>Loading...</p>}
      <NewFlashcard onAddFlashcard={addFlashcardHandler} />
      {!isLoading && <FlashCardList loadedFlashcards={loadedFlashcards} />}
    </>
  );
}

export default Flashcards;
