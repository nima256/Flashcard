import { useLoaderData } from "react-router-dom";

function OneCollection() {
  const collection = useLoaderData();

  return (
    <div>
      <h1>{collection.name}</h1>
      <h2>{collection._id}</h2>
    </div>
  );
}

export async function loader({ params }) {
  const res = await fetch(
    `http://localhost:8000/collection/${params.collectionId}`
  );

  if (!res.ok) throw Error("Couldn't find collection");

  const data = await res.json();
  return data;
}

export default OneCollection;
