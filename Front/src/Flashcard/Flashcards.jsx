// import { useEffect, useState } from "react";
import FlashCardList from "./FlashCardList";
import CreateFlashcard from "./CreateFlashcard";
import { useLoaderData } from "react-router-dom";

function Flashcards() {
  const loadedFlashcards = useLoaderData();

  return (
    <>
      <CreateFlashcard />
      <FlashCardList loadedFlashcards={loadedFlashcards} />
    </>
  );
}

export async function loader() {
  const res = await fetch("http://localhost:8000/flashcards");

  if (!res.ok) {
    throw Error("failed to get flashcards");
  }

  const data = await res.json();
  return data;
}

export default Flashcards;
