const Character = ({
  character,
  updateCharacter,
  clickable
}) => {
  const handleCharacter = ()=>{
    updateCharacter(character);
  }

  const noEffect=()=>{
    return
  }

  return (
    <>
      <div className="grid-item">
        <div
          className="character"
          style={!clickable ? { width: "50rem" } : { width: "25rem" }}
          onClick={clickable ? handleCharacter : noEffect}
        >
          <img src={character.image} alt="character picture" />
          <div>
            <h3>{character.name}</h3>
            <p>
              {character.status}-{character.species}
            </p>
            {!clickable ? (
              <p>
                {character.type}-{character.gender}
              </p>
            ) : (
              ""
            )}

            <p>Origin: {character.origin.name}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Character;