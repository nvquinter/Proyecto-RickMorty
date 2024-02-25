import BotonInicio from "../../components/BotonInicio";
import "./Home.css";

export default function Home (){
    return(
    <header className=" containerHeader d-flex justify-content-center ">
        <div div className="container d-flex flex-column justify-content-center aling-items-center ">
            <h1 className="row justify-content-center">Proyect Rick & Morty</h1>
            <h2 className="text-center p-3">Welcome to Rick & Morty Proyect!</h2>
            <p className="text-center p-2">This proyect was made for practising React and to made a functional website.</p>
            <p className="text-center">In this website you can know information of the characters of this animated series. <br/>
            Also you can filter for diferent types of properties to find the character that you 
            are looking for or send us a massage for any concern o sugestion.</p>
            <h2 className="text-center p-3">Lets go!</h2>
            <div className="text-center">
                <BotonInicio className="botones" nombreBoton='Characters' pasaje='/characters'/>
                <BotonInicio className="botones" nombreBoton="Contact" pasaje='/contact'/> 
            </div>
        </div>
    </header>
    )
}