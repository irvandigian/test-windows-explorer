export async function getFolderTree() {
  const response = await fetch(
    "http://localhost:3000/folders/tree"
  );

  if (!response.ok) {
    throw new Error("Failed to load folders");
  }

  return response.json();
}