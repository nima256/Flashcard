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

export default OneCollection;
