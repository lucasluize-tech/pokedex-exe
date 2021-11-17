import Pokecard from "./Pokecard";
import "./Pokedex.css";

const Pokedex = ({ pokemons }) => {
  return (
    <div className='Pokedex'>
      <h1 className='Pokedex-title'>Pokedex</h1>
      <div className='Pokedex-items'>
        {pokemons.map((p) => (
          <Pokecard
            key={p.id}
            name={p.name}
            type={p.type}
            base_exp={p.base_experience}
            image={p.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
