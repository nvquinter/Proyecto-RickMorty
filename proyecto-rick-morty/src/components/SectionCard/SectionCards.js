import {useEffect, useState} from "react";
import { Fragment } from 'react';
import Filters from "../Filters/Filters";
import Card from "../Card/Card";
import "./SectionCards.css";

export default function SectionCards(){

    let [listaPersonajes, setlistaPersonajes]= useState([])
    let [personajesCompleto,setPersonajesCompleto]=useState([])
    let [filtrosAplicados,setFiltrosAplicados]=useState([]);

    const traerPersonajes=async()=>{

        let info= await fetch("https://rickandmortyapi.com/api/character?")
               .then((resp)=>{return resp.json()})
               .then((data)=>{ return data.results})
               .catch((error)=>{console.log(error)})

            console.log(info)

        setlistaPersonajes(info)
        setPersonajesCompleto(info)
    };

    const filterCharacter=(target)=>{
        //se fija se se "pulso" o "despulso" un filtro y arma la lista de todos los filtros a aplicar
        if(target.checked === true){
            //si se pulso agrega a una lista el filtro aplicado
            setFiltrosAplicados([...filtrosAplicados,target.value])
            // alert("se pulso un checkbox ")
        }else{
            //si "despulso" el filtro
            // alert("se despulso el filtro")
            let filtrosNuevos=filtrosAplicados.filter((filtro)=> filtro !== target.value);//saco el filtro aplicado de la lista
            setFiltrosAplicados(filtrosNuevos)//cambio los filtros aplicados
        }
    }

    useEffect(()=>{
        setlistaPersonajes(personajesCompleto)
        console.log(filtrosAplicados)
        //por cada filtro que tiene pulsado, modifica la informacion de "listaPersonaje"
        filtrosAplicados.forEach((data)=>   {
            if(data === "Dead" || data ==="Alive"){
                let dataFiltrada=listaPersonajes.filter((personaje)=>personaje.status === data); 
                setlistaPersonajes(dataFiltrada)
            }else if(data === "Female" || data ==="Male"){
                let dataFiltrada=listaPersonajes.filter((personaje)=>personaje.gender === data);
                setlistaPersonajes(dataFiltrada)
            }else if(data === "Unknown"){
                let dataFiltrada=listaPersonajes.filter((personaje)=>personaje.origin.name === "unknown");
                setlistaPersonajes(dataFiltrada)
            }else{
                setlistaPersonajes(personajesCompleto)
            }
        })    
    },[filtrosAplicados])

    useEffect(()=>{
        traerPersonajes()
    },[]);

    return(
        <Fragment>
        <main className="container-fluid ">
            <Filters filterCharacter={filterCharacter}/>
            <section className="row cards-section">
                {
                    listaPersonajes.map((personaje)=>{
                    return <Card key={personaje.id} infoPersonaje={personaje}/>})
                }      
            </section>
        </main>
        </Fragment>
    )
};

