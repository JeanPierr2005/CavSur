import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function RegisterPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { signup, isAuthenticated, errors: registerErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate("/login");
    }, [isAuthenticated]);

    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    });

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
                <div className="flex flex-col justify-center p-8 md:p-14">
                    <span className="mb-3 text-4xl font-bold">Bienvenido</span>
                    <span className="font-light text-gray-400 mb-8">
                        Bienvenido de vuelta
                    </span>
                    {registerErrors.map((error, i) => (
                        <div className="bg-red-500 p-2 text-white" key={i}>
                            {error}
                        </div>
                    ))}
                    <form onSubmit={onSubmit}>
                        <div className="py-4">
                            <span className="mb-2 text-md">Nombre de usuario</span>
                            <input
                                type="text"
                                {...register("username", { required: true })}
                                placeholder="Nombre de usuario"
                                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                            />
                            {errors.username && (
                                <p className="text-red-500">
                                    Username is required
                                </p>
                            )}
                            <span className="mb-2 text-md">Email</span>
                            <input
                                type="email"
                                {...register("email", { required: true })}
                                placeholder="Correo Electronico"
                                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                            />
                            {errors.email && (
                                <p className="text-red-500">
                                    Email is required
                                </p>
                            )}
                        </div>
                        <div class="py-4">
                            <span class="mb-2 text-md">Password</span>
                            <input
                                type="password"
                                {...register("password", { required: true })}
                                placeholder="Contraseña"
                                class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                            />
                            {errors.password && (
                                <p className="text-red-500">
                                    Password is required
                                </p>
                            )}
                        </div>
                        <button
                            type="submit"
                            class="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
                        >
                            Registrarse
                        </button>
                    </form>
                    <div class="text-center text-gray-400">
                        Ya tines una cuenta? 
                        <br></br>
                        <Link to='/login' class="font-bold text-black">
                            Iniciar Sesión
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
