import { useEffect, useState } from "react";
import FlashCardList from "./FlashCardList";
import CreateFlashcard from "./CreateFlashcard";

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

  return (
    <>
      {isLoading && <p>Loading...</p>}
      <CreateFlashcard setLoadedFlashcards={setLoadedFlashcards} />
      {!isLoading && <FlashCardList loadedFlashcards={loadedFlashcards} />}
    </>
  );
}

export default Flashcards;
