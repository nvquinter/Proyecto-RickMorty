import {Fragment} from 'react';
import "./NewCharacters.css";

export default function NewCharacters() {

    const handlerCreate = (e) => {
        e.preventDefault();

        let formInfo = {
            name: e.target.name.value,
            status: e.target.status.value,
            species: e.target.species.value,
            gender: e.target.gender.value,
            origin: e.target.origin.value
        };

        fetch("http://localhost:4000/api/characters", 
                {
                    method: 'post',
                    body: JSON.stringify(formInfo),
                    headers: {"Content-Type": "application/json"}
                }
            )
            .then((resp) => resp.json())
            .then(data => {console.log('Personaje creado', data);})
            .catch(err => console.log("Failed to send info: " + err));

 
    }

    return (
        <Fragment>
            <div className=' container-text p-3 '>
                <div className='row div'>
                    <form className='form name-card p-3 col align-self-center text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3' onSubmit={(e) => handlerCreate(e)}>
              
                        <h1 className='h1  text-center'>Crea Tu Personaje</h1>
                        <div className="label col text-center">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" name="name" aria-describedby="name" />
                        </div>
                        <div className="label col text-center">
                            <label htmlFor="status" >Status</label>
                            <input type="text" className="form-control" id="status" name="status" aria-describedby="status" />
                        </div>
                        <div className="label col text-center">
                            <label htmlFor="species" >Species</label>
                            <input type="text" className="form-control" id="species" name="species" aria-describedby="species" />
                        </div>
                        <div className="label col text-center">
                            <label htmlFor="gender" >Gender</label>
                            <input type="text" className="form-control" id="gender" name="gender" aria-describedby="gender" />
                        </div>
                        <div className="label col text-center">
                            <label htmlFor="origin">Origin</label>
                            <input type="text" className="form-control" id="origin" name="origin" aria-describedby="origin" />
                        </div>
                        <div className='d-grid gap-2 col-8 mx-auto'>
                        <button type="submit" className="btn btn-primary btn-lg m-3 botonCard">Crear</button>
                            
                        </div>
                       
                    </form>
                    
                </div>
            </div>
        </Fragment>
    );
}
