import React,{useState} from 'react'
import axios from 'axios';

function Form() {
  const [nome,setNome] = useState("")
  const [Cor,setCor] = useState("")
  const [price,setprice] = useState("")
  const [ano,setano] = useState("")
  const [disponivel,setdisponivel] = useState("")

  const criarCarro = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/carros',{nome,Cor,price,ano,disponivel})
      .then(res=>console.log(res.data))
      .catch(erro=>console.log(erro))
  }
  return (
    <div>
      <form onSubmit={criarCarro}>
        <label htmlFor="nome">Nome</label>
        <input 
          type="text" 
          placeholder='digite o nome' 
          value={nome} 
          onChange={(e)=>setNome(e.target.value)}
        />

        <button type='submit'>Cadastrar</button>
      </form>
    </div>
  )
}

export default Form