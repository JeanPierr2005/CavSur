import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    const { signin, errors: signinErrors, isAuthenticated } = useAuth();
    const navigate = useNavigate()

    const onSubmit = handleSubmit((data) => {
        signin(data);
    });

    useEffect(() => {
        if(isAuthenticated) navigate("/")
    }, [isAuthenticated])

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
                <div className="flex flex-col justify-center p-8 md:p-14">
                    <span className="mb-3 text-4xl font-bold">Bienvenido</span>
                    <span className="font-light text-gray-400 mb-8">
                        Bienvenido de vuelta
                    </span>
                    {signinErrors.map((error, i) => (
                        <div className="bg-red-500 p-2 text-white" key={i}>
                            {error}
                        </div>
                    ))}
                    <form onSubmit={onSubmit}>
                        <div className="py-4">
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
                        <div class="flex justify-between w-full py-4">
                            <div class="mr-24">
                                <input
                                    type="checkbox"
                                    name="ch"
                                    id="ch"
                                    class="mr-2"
                                />
                                <span class="text-md">
                                    Remember for 30 days
                                </span>
                            </div>
                            <span class="font-bold text-md">
                                Forgot password
                            </span>
                        </div>
                        <button
                            type="submit"
                            class="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
                        >
                            Ingresar
                        </button>
                    </form>
                    <div class="text-center text-gray-400">
                        Dont'have an account? 
                        <br></br>
                        <Link to='/register' class="font-bold text-black">
                            Registrarse
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
