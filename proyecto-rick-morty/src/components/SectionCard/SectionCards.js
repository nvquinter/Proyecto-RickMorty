import Card from "../Card/Card";

import "./SectionCards.css";

export default function SectionCards(){
    //conseguir la informacion(array) -> API Rick y Morty (fetch) 
    //crear una tarjeta por cada personaje
    //iterar con el map para generar una tarjeta por cada personaje

    let listaPersonajes=[
        {
            id: 1,
             name: 'Rick Sanchez', 
             status: 'Alive', 
             species: 'Human',
             image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            },
            {
                id: 2, 
                name: 'Morty Smith', 
                status: 'Alive', 
                species: 'Human', 
                image:"https://rickandmortyapi.com/api/character/avatar/2.jpeg"}
            
        ];
    const traerPersonajes=async()=>{

        let info= await fetch("https://rickandmortyapi.com/api/character")//ejecutar la peticion a esa direccion
               .then((resp)=>{return resp.json()})//accionar si logra obtener la info
               .then((data)=>{ return data.results})
                   //siguiente accion que hacemos si todo salio bien.En este caso aprovechamos que sabemos que esta API en particular devuelve la lista de personajes dentro de la propiedad "results" 
               .catch((error)=>{console.log(error)})//accionar si no logra obtenerla
       
           //json() -> metodo que evalua lo que le pasemos como JSON y lo parsea , lo tranasforma a una array|objeto
          console.log(info)
        //listaPersonajes=info;//en la proxima clase mejoramos esta asignacion con el concepto de "state" o "estados"
        
    };


    return(
        <section className="row p-2 cards-section">
            <button onClick={traerPersonajes}>Cargar Personajes</button>
            {
                listaPersonajes.map((personaje)=>{
                    // return  <Card key={personaje.id} infoPersonaje={personaje}/>
                    return <Card key={personaje.id} name={personaje.name} image={personaje.image}/>
                })
            }
            
        </section>
    )
};