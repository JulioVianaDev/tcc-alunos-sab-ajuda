import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Input from './components/Input';
import TextoPokemon from './components/TextoPokemon';
function App() {
  const [pokemonInfo,setPokemonInfo] = useState(undefined);
  const [ atualPokemon,setAtualPokemon] = useState('');
  function getPokemonData(){
    axios.get(`https://pokeapi.co/api/v2/pokemon/${atualPokemon}`)
    .then(res=>{
      console.log(res.data)
      setPokemonInfo(res.data)  
  })
    .catch(err=>console.log(err))
  }
  
  return (
    <div className="App">
      <Input
        setAtualPokemon={setAtualPokemon}
        atualPokemon={atualPokemon}
        getPokemonData={getPokemonData}
      />
   {
      pokemonInfo !== undefined ?
        <TextoPokemon
          nome={pokemonInfo.name}
          peso ={pokemonInfo.weight}
        /> 
        : null
    }
      
    </div>
  );
}

export default App;
