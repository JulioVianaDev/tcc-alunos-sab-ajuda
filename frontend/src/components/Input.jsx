import React from 'react'

function Input({setAtualPokemon,atualPokemon,getPokemonData}) {
  return (
    <>
      <input
        value={atualPokemon}
        onChange={(e)=>setAtualPokemon(e.target.value)}
      />
      <button onClick={()=>getPokemonData()}>Pesquisar</button>
    </>
  )
}

export default Input