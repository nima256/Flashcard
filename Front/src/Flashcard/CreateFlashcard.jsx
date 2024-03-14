import { useState } from "react";

function CreateFlashcard({ setLoadedFlashcards }) {
  const [enteredVocabulary, setEnteredVocabulary] = useState("");
  const [enteredSynonym, setEnteredSynonym] = useState("");

  async function addFlashcardHandler(vocabulary, synonym) {
    try {
      const newFlashcard = {
        vocabulary,
        synonym,
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

  function submitFlashcardHandlere(e) {
    e.preventDefault();
    addFlashcardHandler(enteredVocabulary, enteredSynonym);
    setEnteredVocabulary("");
    setEnteredSynonym("");
  }

  return (
    <>
      <form onSubmit={submitFlashcardHandlere}>
        <label htmlFor="vocabulary">Vocabulary</label>
        <input
          type="text"
          id="vocabulary"
          value={enteredVocabulary}
          onChange={(e) => setEnteredVocabulary(e.target.value)}
        />

        <label htmlFor="synonym">Synonym</label>
        <input
          type="text"
          id="synonym"
          value={enteredSynonym}
          onChange={(e) => setEnteredSynonym(e.target.value)}
        />
        <button type="submit">Add Flashcard</button>
      </form>
    </>
  );
}

export default CreateFlashcard;
