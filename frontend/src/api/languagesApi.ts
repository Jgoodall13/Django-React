const BASE_URL = "http://127.0.0.1:8000/api/languages";

export const fetchLanguages = async () => {
  const response = await fetch(`${BASE_URL}/`);
  if (!response.ok) {
    throw new Error("Failed to fetch languages");
  }
  return response.json();
};

export const createLanguage = async (newLanguage: { name: string }) => {
  const response = await fetch(`${BASE_URL}/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newLanguage),
  });
  if (!response.ok) {
    throw new Error("Failed to create language");
  }
  return response.json();
};
