import Navegation from "../../components/Navegation";
import "./Contact.css";

export default function Contact (){
  

    return(
        <div>
            <Navegation hoja="Contact"/>
            <main className=" container-fluid ">
                <div className="main-contact-div d-flex flex-column justify-content-center align-items-center m-auto mt-5 w-75 h-75" >
                    <h1 className="row text-center py-5">Contact</h1>
                    <p className="row  text-center h3">Leave us your information so we can contact you</p>
           
                 <form className="row g-3 p-4" >
                        <div className="col-md-6">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control  p-2" id="nombre" name="name" required=""/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="apellido" className="form-label">Apellido</label>
                            <input type="text" className="form-control  p-2" id="apellido" name="apellido" required=""/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="mensaje" className="form-label">Mensaje</label>
                            <textarea id="mensaje" className="form-control p-4" name="mensaje" required=""></textarea>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn botones colorW send">Send</button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}