
import "./Navegation.css";

export default function Navegation({hoja}){
    return(
        <header className=" bg-blue">
            <nav className="navbar navbar-expand-lg w-100 bg-blue">
                <div className="container-fluid justify-content-between align-items-center cursor-p">
                  <h1 className="navbar-brand cursor-p">Rick & Morty</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                          
                          <li className={hoja === "Characters" ? "nav-link active":"nav-link"} aria-current="page" >Characters</li>
                          
                           
                         <li className={hoja === "Contact" ? "nav-link active":"nav-link"}  aria-current="page" >Contact</li>
                         
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}