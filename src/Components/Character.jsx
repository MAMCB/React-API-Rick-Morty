const Character =({name,picture,species,status,origin})=>{
return (
  <>
    <div className="grid-item">
      <div className="character">
        <img src={picture} alt="character picture" />
        <div>
          <h3>{name}</h3>
          <p>{status}-{species}</p>
          <p>Origin: {origin}</p>
        </div>
      </div>
    </div>
  </>
);
};
export default Character;