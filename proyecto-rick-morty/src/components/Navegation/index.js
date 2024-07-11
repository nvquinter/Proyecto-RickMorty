import { Link } from "react-router-dom";
import "./Navegation.css";
import BuscarCharacter from "../BuscarCharacters/BuscarCharacter";

export default function Navegation({hoja}){
    return(
        <header className=" bg-blue">
            <nav className="navbar navbar-expand-lg w-100 bg-blue">
                <div className="container-fluid justify-content-between align-items-center cursor-p">
                  <Link to="/" className="navbar-brand cursor-p"><h1>Rick & Morty</h1></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" 
                        aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav nav-pills p-4">
                            <li className="nav-item m-2" >
                                <Link className= {hoja === "Characters" ? "nav-link btn-active":"nav-link boton p-2 "} aria-current="page"  to='/characters'>Characters</Link>
                            </li>
                            <li className="nav-item m-2"> 
                                <Link className={hoja === "Contact" ? "nav-link btn-active":"nav-link boton p-2"}  aria-current="page" to='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                     <BuscarCharacter/> 
                </div>
            </nav>
        </header>
    )
}


