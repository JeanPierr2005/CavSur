import React from "react";
import "../Styles/Style.css";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope, faLock, faUser} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


function Register(){

     //clave para acceder con google
    const clientID = "196128123032-acq8joe6bmgbi3gcr5d9e3uf3mnngb6j.apps.googleusercontent.com";

     //iniciar sevicios de google
    useEffect(() => {
        const start = () => {
            gapi.auth2.init({
                clientId: clientID,
            })
        }
        gapi.load("client:auth2", start)
    }, [])

     //funcion que recibe la respuesta y la imprime por consola
    const onSuccess = (response) =>{
        console.log(response)
    }
    const onFailure = () => {
        console.log("Algo salió mal")
    }
    return(
        <>
        <div className="container-form ">
            <div className="information">
                <div className="info-image">
                    <h1>CavSur</h1>
                </div>
            </div>
                <div className="form-information">
                    <div className="form-information-childs">
                        <h2>Crear una cuenta</h2>
                        <p>O usa una de tus cuentas google para regístrarte</p>
                        <div className="icons">
                            <GoogleLogin 
                                clientId={clientID}
                                //funcion a ejecutar en caso de que el inico de sesion sea exitoso
                                onSuccess={onSuccess}
                                onFailure={onFailure}
                                cookiePolicy={"single_host_policy"}
                            />
                        </div>
                        
                        <form className="form">
                            <label>
                                <FontAwesomeIcon icon={faUser} />
                                <input type="text" placeholder="name" name="name" />
                            </label>
                            <label>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <input type="email" placeholder="email" name="email" />
                            </label>
                            <label>
                            <FontAwesomeIcon icon={faLock} />
                                <input type="password" placeholder="password" name="password"/>
                            </label>
                            <input type="submit" value="Registrar"/>
                            <p>¿Ya tienes una cuenta? <Link to="/login" className="Link"> Iniciar Sesión</Link>  </p>
                        </form>
                    </div>
                </div>
        </div>
        </>
    )
}

export default Register;
