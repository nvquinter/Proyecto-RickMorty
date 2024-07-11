import {useState} from "react";
import "./BuscarCharacter.css";

export default function BuscarCharacter(){

 const[id, setId]= useState('');

  const handleSearch= (e)=>{
    setId(e.target.value);
  };
   const searchCharacter=(e)=>{
    e.preventDefault()
    fetch(`http://localhost:4000/api/characters/${id}`)
     .then((resp) => {
        if (!resp.ok) {
          throw new Error('Error en la solicitud');
        }
        return resp.json();
      })
      .then(data => console.log(data))
      .catch(err => console.log(err));
   }

   return(
    <div >
      <form className='bg-blue buscar my-2 p-4 cursor-p' onSubmit={searchCharacter}>
        <label htmlFor='id' className="label form-label">Buscar por ID</label>
          <input type='text' name='id' value={id} onChange={handleSearch} className="form-control"/>
          <input type='submit' value="Buscar" className='input btn btn-primary'/>
      </form>
    </div>
)
}