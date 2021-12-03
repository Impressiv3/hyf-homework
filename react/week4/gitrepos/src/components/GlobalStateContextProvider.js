import { useState, useEffect } from "react";
import { GlobalStateContext } from "../contexts/GlobalStateContext";
const API = "https://api.github.com/search/users?q=";

export default function GlobalStateContextProvider({ children }) {
  const [repositories, setRepositories] = useState([]);
  const [query, setQuery] = useState(null);
  const [message, setMessage] = useState("App loaded...");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function fetchData(query) {
    setIsLoading(true);
    setMessage("Loading...");
    fetch(API + query)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then((data) => {
        setRepositories(data.items);
        setMessage("Search results:")
      })
      .catch((error) => setError({ error: error }), setIsLoading(false));
  }

  useEffect(() => {
    if (!query || query === "") {
      return;
    } else {
      fetchData(query);
    }
    fetchData(query);
  }, [query]);

  return (
    <GlobalStateContext.Provider
      value={{
        repositories,
        setRepositories,
        query,
        setQuery,
        message,
        setMessage,
        isLoading,
        setIsLoading,
        error,
        setError,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
}
