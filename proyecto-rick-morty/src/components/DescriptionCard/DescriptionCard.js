
import "./DescriptionCard.css";

export default function DescriptionCard (){
    return(
        <div className="d-flex p-5 flex-column align-items-center more-info-section description">
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn btn-active p-2">X</button>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item p-3 d-flex flex-column">Estado del Personaje</li>
                <li class="list-group-item p-3 d-flex flex-column">Especie</li>
                <li class="list-group-item p-3 d-flex flex-column">Origen</li>
                <li class="list-group-item p-3 d-flex flex-column">Genero</li>
            </ul>
        </div>
    )
};