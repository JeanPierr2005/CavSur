import React from "react";
import "../Styles/Style.css";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope, faLock, faUser} from "@fortawesome/free-solid-svg-icons";
import "./Script_login.js";

function Login(){
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

    return (
        <>
        {/* Registrar form */}
        <div className="container-form register">
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
                            <p>O </p>
                            <input type="button" value="Iniciar Sesión" id="sign-in"/>
                        </form>
                    </div>
                </div>
        </div>

        {/* Ingresar form */}
        <div className="container-form login hide">
            <div className="information">
                <div className="info-image">
                    <h1>CavSur</h1>
                </div>
            </div>
                <div className="form-information">
                    <div className="form-information-childs">
                        <h2>Iniciar Sesión</h2>
                        <p>O usa una de tus cuentas google para Iniciar Sesión</p>
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
                                <FontAwesomeIcon icon={faEnvelope} />
                                <input type="email" placeholder="email" name="email" />
                            </label>
                            <label>
                            <FontAwesomeIcon icon={faLock} />
                                <input type="password" placeholder="password" name="password"/>
                            </label>
                            <input type="submit" value="Iniciar Sesión"/>
                            <p>O </p>
                            <input type="button" value="Registrar" id="sign-up"/>
                        </form>
                    </div>
                </div>
        </div>
        </>
    )
}

export default Login