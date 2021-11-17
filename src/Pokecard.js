import "./Pokecard.css";

const Pokecard = ({ name, image, type, base_exp }) => {
  let image_url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${image}.png`;
  let altName = `pokemon image for ${name}`;
  return (
    <div className='Pokecard'>
      <h3 className='Pokecard-title'>{name}</h3>
      <img src={image_url} className='Pokecard-image' alt={altName} />
      <ul className='Pokecard-data'>
        <p className='Pokecard-type'>Type: {type}</p>
        <p className='Pokecard-exp'>EXP :{base_exp}</p>
      </ul>
    </div>
  );
};

export default Pokecard;
