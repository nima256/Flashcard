import CollectionItems from "./CollectionItems";

function CollectionList({ loadedCollections }) {
  return (
    <>
      <ul>
        {loadedCollections.map((collection) => (
          <CollectionItems collection={collection} key={collection._id} />
        ))}
      </ul>
    </>
  );
}

export default CollectionList;
