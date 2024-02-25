import "./DescriptionCard.css";

export default function DescriptionCard ({status,especie,genero,origen, setHide}){
	
    return(
        <div className="d-flex p-3 flex-column align-items-center more-info-section">
            <button className=" botones boton btn btn-active d-flex align-self-end m-2 btn-x-md" onClick={()=>setHide(true)}>X</button>
            <ul className="list-group "> 
                <li className="list-group-item p-3 d-flex flex-column">
				    <span className="fw-bold">Character Status {status}</span>
				</li>
                <li className="list-group-item p-3 d-flex flex-column">Especies
					<span className="fw-bold">{especie}</span> 
				</li>
                <li className="list-group-item p-3 d-flex flex-column ">Origin
				    <span className="fw-bold">{origen}</span> 
				</li>
                <li className="list-group-item p-3 d-flex flex-column ">Gender
                    <span className="fw-bold">{genero}</span> 
                </li>
            </ul>
        </div>
    )
};