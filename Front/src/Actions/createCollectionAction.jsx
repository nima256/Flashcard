import { redirect } from "react-router-dom";

async function createCollectionAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  let hasError = false;
  const response = await fetch("http://localhost:8000/collection/new", {
    method: "POST",
    body: JSON.stringify(data),
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

  return redirect(`/collection/${responseData.collection._id}`);
}

export default createCollectionAction;
