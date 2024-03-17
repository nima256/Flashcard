// import { useEffect, useState } from "react";
import CollectionList from "./CollectionList";
import CreateCollection from "./CreateCollection";
import { useLoaderData } from "react-router-dom";

function Collections() {
  const loadedCollections = useLoaderData();

  return (
    <>
      <CreateCollection loadedCollections={loadedCollections} />
      <CollectionList loadedCollections={loadedCollections} />
    </>
  );
}

export async function loader() {
  const res = await fetch("http://localhost:8000/collection");

  if (!res.ok) {
    throw Error("failed to get collections");
  }

  const data = await res.json();
  return data;
}

export default Collections;
