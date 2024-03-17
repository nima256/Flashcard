import CollectionItems from "./CollectionItems";

function CollectionList({ loadedCollections }) {
  return (
    <>
      <ul>
        {loadedCollections.map((eachCollection, index) => (
          <CollectionItems key={index} collection={eachCollection} />
        ))}
      </ul>
    </>
  );
}

export default CollectionList;
