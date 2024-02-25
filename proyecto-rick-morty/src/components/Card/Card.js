import{useState} from "react";
import DescriptionCard from "../DescriptionCard/DescriptionCard";
import "./card.css";

export default function Card({infoPersonaje}) {
    let [hide, setHide]=useState(true);
    const showMore=()=>{
        setHide(false)
    }
    const ocultarInfo=()=>{
        setHide(true)
    }

    return(
       <div className="card rounded aling-items-center d-flex flex-row gap-2">
            {hide === false? <button className="btn d-none btn-active d-flex align-self-end m-2 btn-x-sm" onClick={ocultarInfo}>X</button>:<span></span>}   
            <div className='d-flex flex-column justify-content-between align-items-center' onClick={showMore}>
                <img  src={infoPersonaje.image} alt="Rick & Morty"/>
                <h3 className="size-name text-center name-card">{infoPersonaje.name}</h3>
                <div className="d-flex align-self-end gap-2 ">
                    {hide === true ? <button className="botonCard btn btn-active p-2" onClick={showMore}>Know More..</button>:""} 
                </div>
            </div>
            {hide===false?<DescriptionCard status={infoPersonaje.status} especie={infoPersonaje.species} genero={infoPersonaje.gender} origen={infoPersonaje.origin.name} setHide={setHide}/>:""}
        </div>
    )
}   