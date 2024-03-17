import { useState } from "react";
import CollectionList from "./CollectionList";
import CreateCollection from "./CreateCollection";
import { useLoaderData } from "react-router-dom";

function Collections() {
  const [collections, setCollections] = useState(useLoaderData());

  const addCollection = (newCollection) => {
    setCollections((prevCollections) => [...prevCollections, newCollection]);
  };

  return (
    <>
      <CreateCollection addCollection={addCollection} />
      <CollectionList loadedCollections={collections} />
    </>
  );
}

export default Collections;
