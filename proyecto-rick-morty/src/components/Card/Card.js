import "./card.css";
import DescriptionCard from "../DescriptionCard/DescriptionCard";
import{useState} from "react";

export default function Card({infoPersonaje}) {
    let [hide, setHide]=useState(true);
    const showMore=()=>{
        setHide(false)
    }
    return(
       <div className="card rounded aling-items-center d-flex flex-row gap-2">
            <div>
                <img  src={infoPersonaje.image} alt="Rick & Morty"/>
                <h3 className=" size-name text-center name-card">{infoPersonaje.name}</h3>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className="botonCard btn btn-success p-2" onClick={showMore}>Know More..</button>
                    </div>
            </div>
            {hide===false?<DescriptionCard status={infoPersonaje.status} especie={infoPersonaje.species} genero={infoPersonaje.gender} origen={infoPersonaje.origin.name} setHide={setHide}/>:""}
        </div>
    )
    
}