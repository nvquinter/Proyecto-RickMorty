
import "./DescriptionCard.css";
import Swal  from "sweetalert2";

export default function DescriptionCard ({id, nombre, status, especie, genero, origen }){
   
        function deleteCharacter(id) {
            Swal.fire({
                title: '¿Estás seguro?',
                text: 'No podrás revertir esto',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, eliminarlo'
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:4000/api/characters/${id}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('No se pudo eliminar el personaje');
                        }
                        return response.json();
                    })
                    .then(data => {
                        console.log('Personaje eliminado:', data);
                       
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
                }
            });
        }
    

    return(
        <div className=" card rounded align-items-center d-flex flex-row gap-2">
            <ul className="list-group "> 
                <li className="list-group-item p-3 d-flex flex-column">
				    <span className="fw-bold">Character Status {status}</span>
				</li>
                <li className="list-group-item p-3 d-flex flex-column">Name
					<span className="fw-bold">{nombre}</span> 
				</li>
                <li className="list-group-item p-3 d-flex flex-column">Especies
					<span className="fw-bold">{especie}</span> 
				</li>
                <li className="list-group-item p-3 d-flex flex-column">Origin
				    <span className="fw-bold">{origen}</span> 
				</li>
                <li className="list-group-item p-3 d-flex flex-column">Gender
                    <span className="fw-bold">{genero}</span> 
                </li>
                <button className="botonCard btn btn-active p-2" onClick={() => deleteCharacter(id)}>Eliminar</button>
              
            </ul>        
        </div>
    )
};