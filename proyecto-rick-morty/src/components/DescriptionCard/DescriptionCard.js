
import "./DescriptionCard.css";

export default function DescriptionCard ({status,especie,genero,origen, setHide}){

    return(
        <div className="d-flex p-3 flex-column align-items-center more-info-section">
            <button className=" botones boton btn btn-active d-flex align-self-end m-2 btn-x-md" onClick={()=>setHide(true)}>
                <font>
			        <font>X</font>
                </font> 
            </button>
            
            <ul className="list-group "> 
                <li className="list-group-item p-3 d-flex flex-column">
				    <span className="fw-bold">
					    <font >
						    <font >Character Status </font>
					    </font>
                        <font >
                            <font>{status}</font>
					    </font>
				    </span>
				</li>
                <li className="list-group-item p-3 d-flex flex-column">
					<font>
				        <font>Especies</font>
					</font>
					<span className="fw-bold">
					    <font> 
					        <font>{especie}</font>
					    </font>
					</span> 
				</li>
                <li className="list-group-item p-3 d-flex flex-column ">
				    <font>
					    <font>Origin</font>
				    </font>
				    <span className="fw-bold">
				        <font>
				            <font>{origen}</font>
				        </font>
				    </span> 
				</li>
                <li className="list-group-item p-3 d-flex flex-column ">
                    <font>
                        <font>Gender</font>
                    </font>
                    <span className="fw-bold">
                        <font>
                            <font >{genero}</font>
                        </font>
                    </span> 
                </li>
            </ul>
        </div>
    )
};