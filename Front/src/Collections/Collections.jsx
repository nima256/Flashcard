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

export default Collections;
