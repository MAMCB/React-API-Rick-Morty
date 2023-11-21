import { useState, useEffect } from "react";
import Character from "./Components/Character";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const lastPage = 42;
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.error(error));
  }, [page]);
  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    setPage(page - 1);
  };

 

  return (
    <>
      <h1 id="top">The complete Rick and Morty character list</h1>
      <div className="grid-container">
        {characters ? (
          characters.map((character) => (
            <Character
              key={uuidv4()}
              name={character.name}
              picture={character.image}
              species={character.species}
              status={character.status}
              origin={character.origin.name}
            />
          ))
        ) : (
          <p>No characters</p>
        )}
      </div>

      <p>Current page: {page}</p>
      <a href="#top">Back to top</a>
      {page > 1 ? <button onClick={previousPage}>Previous page</button> : ""}
      {page < lastPage ? <button onClick={nextPage}>Next page</button> : ""}
    </>
  );
}

export default App;
