import "./card.css";

export default function Card({name,image}) {
    return(
       <div className="cardSection">
            <img  src={image} alt="Rick & Morty"/>
            <h3 className="text-center">{name}</h3>
            <div className="text-end">
                <button className="btn btn-success w-30 botonCard ">Know More...</button>
            </div>
        </div>
    )
    
}