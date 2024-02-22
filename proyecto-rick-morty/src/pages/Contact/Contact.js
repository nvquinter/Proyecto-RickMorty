import Navegation from "../../components/Navegation"
import "./Contact.css";
export default function Contact (){
    return(
        <div>
            <Navegation hoja="Contact"/>
            <main className="main-contact-div">
                <h1 className="colorBlue text-center">Contact</h1>
                <p className="text-center ">Leave us your information so we can contact you</p>
                <form className="row colorBLue g-3 p-4">
                    <div className="col-md-6">
                        <label htmlFor="nombre" className="form-label">Name</label>
                        <input type="text" className="form-control  p-2" id="nombre" name="name" required=""/>
                    </div>
                    <div className="col-md-6">
                        <label for="correo" className="form-label">Email</label>
                        <input type="email" className="form-control  p-2" id="correo" name="email" required=""/>
                    </div>
                    <div className="col-12">
                        <label for="mensaje" className="form-label">Messege</label>
                        <textarea id="mensaje" className="form-control p-4" name="messege" required=""></textarea>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn botones colorW">Send</button>
                    </div>
                </form>
            </main>
        </div>
    )
}