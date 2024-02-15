import "./card.css";
import DescriptionCard from "../DescriptionCard/DescriptionCard";

export default function Card({name,image}) {
    return(
       <div className="card d-flex aling-items-center">
            <img  src={image} alt="Rick & Morty"/>
            <h3 className=" size-name text-center name-card">{name}</h3>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="botonCard btn btn-success p-2">Know More..</button>
            </div>
            <DescriptionCard/>
        </div>
    )
    
}