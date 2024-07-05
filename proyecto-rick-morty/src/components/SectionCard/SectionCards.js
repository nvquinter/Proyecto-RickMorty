import {Fragment} from 'react';
import Card from "../Card/Card";
import "./SectionCards.css";

import { useEffect, useState } from "react";

export default function SectionCards(){

        let [listaPersonajes, setlistaPersonajes]= useState('')

    const traerCharacters= async()=>{
        await fetch("http://localhost:4000/api/characters")
        .then((resp)=>{return resp.json()})

        .then((respuesta)=> setlistaPersonajes(respuesta.data))
        .catch((err)=>{console.log("no se logro obtener la info:" +err)})

    }
    useEffect(()=>{
        traerCharacters()
    },[])

return (  
        <Fragment>
            <main className="container-fluid ">
                <section className="row cards-section">
                    {listaPersonajes.length !== 0 ?
                        listaPersonajes.map((personaje)=>{
                        return <Card key={personaje.id} infoPersonaje={personaje}/>})
                        :
                        <div> Characters No found </div>
                    }
                </section>
            </main>
        </Fragment>)
};















// import {useEffect, useState} from "react";
// import { Fragment } from 'react';
// import Filters from "../Filters/Filters";
// import Card from "../Card/Card";
// import "./SectionCards.css";

// export default function SectionCards(){

//     let [listaPersonajes, setlistaPersonajes]= useState([])
//     let [personajesCompleto,setPersonajesCompleto]=useState([])
//     let [filtrosAplicados,setFiltrosAplicados]=useState([]);

//     const traerPersonajes=async()=>{

//         let info= await fetch("https://rickandmortyapi.com/api/character?")
//                .then((resp)=>{return resp.json()})
//                .then((data)=>{ return data.results})
//                .catch((error)=>{console.log(error)})

//             console.log(info)

//         setlistaPersonajes(info)
//         setPersonajesCompleto(info)
//     };

//     const filterCharacter=(target)=>{
//         if(target.checked === true){
//             setFiltrosAplicados([...filtrosAplicados,target.value])
//         }else{
//             let filtrosNuevos=filtrosAplicados.filter((filtro)=> filtro !== target.value);//saco el filtro aplicado de la lista
//             setFiltrosAplicados(filtrosNuevos)
//         }
//     }

//     useEffect(()=>{
//         setlistaPersonajes(personajesCompleto)
//         console.log(filtrosAplicados)
//         filtrosAplicados.forEach((data)=>   {
//             if(data === "Dead" || data ==="Alive"){
//                 let dataFiltrada=listaPersonajes.filter((personaje)=>personaje.status === data);
//                 setlistaPersonajes(dataFiltrada)
//             }else if(data === "Female" || data ==="Male"){
//                 let dataFiltrada=listaPersonajes.filter((personaje)=>personaje.gender === data);
//                 setlistaPersonajes(dataFiltrada)
//             }else if(data === "Unknown"){
//                 let dataFiltrada=listaPersonajes.filter((personaje)=>personaje.origin.name === "unknown");
//                 setlistaPersonajes(dataFiltrada)
//             }else{
//                 setlistaPersonajes(personajesCompleto)
//             }
//         })
//     },[filtrosAplicados])

//     useEffect(()=>{
//         traerPersonajes()
//     },[]);

//     return(
//         <Fragment>
//             <main className="container-fluid ">
//                 <Filters filterCharacter={filterCharacter}/>
//                 <section className="row cards-section">
//                     {
//                         listaPersonajes.length !== 0 ?
//                         listaPersonajes.map((personaje)=>{
//                         return <Card key={personaje.id} infoPersonaje={personaje}/>}):
//                         <div className="alert alert-success d-flex aling-items-center p-2" role="alert">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16" aria-label="Warning:">
//                             <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
//                             </svg>
//                             Sorry! There are no characters width all those properties.
//                         </div>
//                     }
//                 </section>
//             </main>
//         </Fragment>
//     )
// };

