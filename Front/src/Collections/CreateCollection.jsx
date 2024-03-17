import { useState } from "react";

function CreateCollection({ loadedCollections }) {
  const [enteredCollectionName, setEnteredCollectionName] = useState("");

  async function addCollectionHandler(collectionName) {
    try {
      const newCollection = {
        collectionName,
      };
      let hasError = false;
      const response = await fetch("http://localhost:8000/collection/new", {
        method: "POST",
        body: JSON.stringify(newCollection),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        hasError = true;
      }
      const responseData = await response.json();

      if (hasError) {
        throw new Error(responseData.message);
      }

      loadedCollections((prevCollection) => {
        return prevCollection.concat({
          ...newCollection,
          id: responseData.collection._id,
        });
      });
    } catch (error) {
      alert(error.message);
    }
  }

  function submitCollectionHandlere(e) {
    e.preventDefault();
    addCollectionHandler(enteredCollectionName);
    setEnteredCollectionName("");
  }

  return (
    <>
      <form onSubmit={submitCollectionHandlere}>
        <label htmlFor="collection">Collection</label>
        <input
          type="text"
          id="collection"
          value={enteredCollectionName}
          onChange={(e) => setEnteredCollectionName(e.target.value)}
        />

        <button type="submit">Add Collection</button>
      </form>
    </>
  );
}

export default CreateCollection;
