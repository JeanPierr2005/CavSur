import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import imagen from '../img/nuevologo.png'

export default function NavBar() {
    const { isAuthenticated, logout, user } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const logo = [imagen];

    const indiceImagen = 0;

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full relative top-0 left-0">
            <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7 shadow-lg">
                <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
                    <span className="text-3xl mr-1 pt-2 flex">
                        <img className="w-10" src={logo[indiceImagen]}/>
                        <Link to="/">CavSur</Link>
                    </span>
                </div>
                {isAuthenticated ? (
                    <>
                        <div
                            onClick={() => setOpen(!open)}
                            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
                        >
                            <ion-icon name={open ? "close" : "menu"}></ion-icon>
                        </div>
                        <ul
                            className={`md:flex md:items-center cursor-pointer md:pb-0 pb-12 absolute md:static bg-white md:z-[50] z-[50] left-0 w-full md:w-auto md_pl-0 pl-9 transition-all duration-500 ease-in ${
                                open ? "top-20 opacity-100" : "top-[-490px]"
                            } md:opacity-100 opacity-0`}
                        >
                            <li className="md:ml-8 text-xl md:my-0 my-7">
                                <Link to="/matches">Partidos</Link>
                            </li>
                            <li className="md:ml-8 text-xl md:my-0 my-7">
                                <Link to="/events">Eventos</Link>
                            </li>
                            <div>
                                <li
                                    onClick={toggleMenu}
                                    className="bg-[#395886] hover:bg-[#628ecb] text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline md:ml-8 text-xl md:my-0"
                                >
                                    {user.username}
                                </li>
                                {/* <li className="text-1xl">{user.username}</li> */}
                                {/* {isOpen && (
                                <div className="absolute mt-2 p-2 bg-white shadow-md">
                                <p>hola</p>
                                </div>
                            )} */}
                                <Transition
                                    show={isOpen}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <div className="absolute right-9 w-30 bg-white rounded-md shadow-lg">
                                        <ul>
                                            <li className="w-full py-3 px-10  hover:bg-slate-200">
                                                <Link to="/profile">
                                                    Perfil
                                                </Link>
                                            </li>
                                            <li className="w-full py-3 px-10  hover:bg-slate-200">
                                                <Link
                                                    to="/"
                                                    onClick={() => {
                                                        logout();
                                                    }}
                                                >
                                                    Cerrar Sesión
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Transition>
                            </div>
                        </ul>
                    </>
                ) : (
                    <>
                        <div
                            onClick={() => setOpen(!open)}
                            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
                        >
                            <ion-icon name={open ? "close" : "menu"}></ion-icon>
                        </div>
                        <ul
                            className={`md:flex md:items-center cursor-pointer md:pb-0 pb-12 absolute md:static bg-[#8aaee0] md:z-auto z-[-1] left-0 w-full md:w-auto md_pl-0 pl-9 transition-all duration-500 ease-in ${
                                open ? "tio-20 opacity-100" : "top-[-490px]"
                            } md:opacity-100 opacity-0`}
                        >
                            <li className="md:ml-8 text-xl md:my-0 my-7">
                                <Link to="/login">Login</Link>
                            </li>
                            <li className="md:ml-8 text-xl md:my-0 my-7">
                                <Link to="/register">Register</Link>
                            </li>
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
}
