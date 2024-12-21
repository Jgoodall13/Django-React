import { useQuery } from "@tanstack/react-query";
import { fetchLanguages } from "../api/languagesApi";

function Languages() {
  const {
    data: languages,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["languages"],
    queryFn: fetchLanguages,
  });

  if (isLoading) return <p>Loading tasks...</p>;
  if (error instanceof Error) return <p>Error: {error.message}</p>;

  return (
    <>
      <h1>Languages</h1>
      <ul>
        {languages.map((language: any) => (
          <li key={language.id}>
            {language.name} | {language.paradigm}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Languages;
