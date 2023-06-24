import axios from 'axios'
import React,{useState,useEffect} from 'react'

function Consultas() {
  const [consultas,setConsultas] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3001/consultas')
    .then(res=>setConsultas(res.data))
    .catch(erro=>console.log(erro))
  },[])
  const deletarConsulta=(id)=>{
    axios.delete(`http://localhost:3001/consultas/${id}`)
    .then(res=>setConsultas(consultas.filter(c=>c.id !== id)))
    .catch(erro=>console.log(erro))
  }
  const atualizarConsulta = (id,nome,desc,paciente,data)=>{
    axios.put(`/api/lists/${id}`,{nome,desc,paciente,data})
    .then(res=>{
      let newUpdatedLists= consultas.map(c=>{
         if (c.id===id){
          return res.data
         }
         return c
      })
      setConsultas(newUpdatedLists)
    })
    .catch(err=>console.log("erro no edit: ",err))
  }

  return (
    <div>Consultas</div>
  )
}

export default Consultas