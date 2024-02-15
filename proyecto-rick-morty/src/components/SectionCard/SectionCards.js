import Card from "../Card/Card";
import {useEffect, useState} from "react";
import "./SectionCards.css";

export default function SectionCards(){

    let [listaPersonajes, setlistaPersonajes]= useState([])
    
    const traerPersonajes=async()=>{

        let info= await fetch("https://rickandmortyapi.com/api/character")
               .then((resp)=>{return resp.json()})
               .then((data)=>{ return data.results})
               .catch((error)=>{console.log(error)})

            console.log(info)

        setlistaPersonajes(info)
       
    };

    useEffect(()=>{
        traerPersonajes()
    },[]);

    return(
        <section className="row cards-section">
            {
                listaPersonajes.map((personaje)=>{
                    return <Card key={personaje.id} name={personaje.name} image={personaje.image}/>
                })
            }   
        </section>
    )
};