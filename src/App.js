import Pokedex from "./Pokedex";
import Pokemons from "./Pokemons";
import "./App.css";

console.log(Pokemons);
function App() {
  return (
    <div className='App'>
      <Pokedex pokemons={Pokemons} />
    </div>
  );
}

export default App;
