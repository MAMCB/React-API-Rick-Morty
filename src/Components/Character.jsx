const Character = ({
  character,
  updateCharacter,
  clickable,image,name,status,type,gender,origin,species
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
          <img src={image} alt="character picture" />
          <div>
            <h3>{name}</h3>
            <p>
              {status}-{species}
            </p>
            {!clickable ? (
              <p>
                {type}-{gender}
              </p>
            ) : (
              ""
            )}

            <p>Origin: {origin}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Character;