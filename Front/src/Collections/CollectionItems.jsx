import { Link } from "react-router-dom";

function CollectionItems({ collection }) {
  return (
    <>
      <li>
        <h2>{collection.name}</h2>
        <Link to={`/collection/${collection._id}`}>View</Link>
      </li>
    </>
  );
}

export default CollectionItems;
