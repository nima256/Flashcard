import { useState } from "react";

function NewFlashcard({ onAddFlashcard }) {
  const [enteredVocabulary, setEnteredVocabulary] = useState("");
  const [enteredSynonym, setEnteredSynonym] = useState("");

  function submitFlashcardHandlere(e) {
    e.preventDefault();
    onAddFlashcard(enteredVocabulary, enteredSynonym);
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

export default NewFlashcard;
