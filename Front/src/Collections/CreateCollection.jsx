// import { useState } from "react";
import { Form } from "react-router-dom";

function CreateCollection() {
  return (
    <>
      <Form method="POST" action="/collection/new">
        <label htmlFor="collection">Collection</label>
        <input type="text" id="collection" name="name" required />

        <button type="submit">Add Collection</button>
      </Form>
    </>
  );
}

export default CreateCollection;
