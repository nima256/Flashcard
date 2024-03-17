async function oneCollectionLoader({ params }) {
  const res = await fetch(
    `http://localhost:8000/collection/${params.collectionId}`
  );

  if (!res.ok) throw Error("Couldn't find collection");

  const data = await res.json();
  return data;
}

export default oneCollectionLoader;
