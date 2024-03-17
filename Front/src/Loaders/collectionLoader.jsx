async function collectionLoader() {
  const res = await fetch("http://localhost:8000/collection");

  if (!res.ok) {
    throw Error("failed to get collections");
  }

  const data = await res.json();
  return data;
}

export default collectionLoader;
