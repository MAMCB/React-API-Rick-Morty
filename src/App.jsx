import { useState, useEffect } from "react";
import Character from "./Components/Character";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [currentCharacter,setCurrentCharacter] =useState(null);
  const lastPage = 42;
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.error(error));
  }, [page]);
    useEffect(()=>{
      setCurrentCharacter(characters[0])
    },[]);
  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    setPage(page - 1);
  };

  const updateCharacter = (newCharacter) =>{
    setCurrentCharacter(newCharacter);
  }
  const deselectCharacter = () =>{
    setCurrentCharacter(null);
  }

 

  return (
    <>
      <h1 id="top">The complete Rick and Morty character list</h1>

      {currentCharacter ? (
        <Character
          key={uuidv4()}
          character={currentCharacter}
          clickable={false}
          updateCharacter={updateCharacter}
          image={currentCharacter.image}
          name={currentCharacter.name}
          status={currentCharacter.status}
          gender={currentCharacter.gender}
          type={currentCharacter.type}
          species={currentCharacter.species}
          origin={currentCharacter.origin.name}
        />
      ) : (
        ""
      )}

      <div className="grid-container">
        {!currentCharacter ? (
          characters.map((character) => (
            <Character
              key={uuidv4()}
              character={character}
              clickable={true}
              updateCharacter={updateCharacter}
              image={character.image}
              name={character.name}
              status={character.status}
              gender={character.gender}
              type={character.type}
              species={character.species}
              origin={character.origin.name}
            />
          ))
        ) : (
          <button onClick={deselectCharacter}>Back</button>
        )}
      </div>

      <div style={!currentCharacter ?{display:"block"}:{display:"none"}}>
        <p>Current page: {page}</p>
        <a href="#top">Back to top</a>
        {page > 1 ? <button onClick={previousPage}>Previous page</button> : ""}
        {page < lastPage ? <button onClick={nextPage}>Next page</button> : ""}
      </div>
    </>
  );
}

export default App;
