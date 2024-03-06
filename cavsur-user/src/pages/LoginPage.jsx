import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { signin, errors: signinErrors } = useAuth();

    const onSubmit = handleSubmit((data) => {
        signin(data);
    });

    return (
        <div className="flex h-[calc(100vh-10px)] items-center justify-center">
            <div className="bg-blue-300 max-w-md w-full p-10 rounded-md">
                {signinErrors.map((error, i) => (
                    <div
                        className="bg-red-500 p-2 text-white text-center"
                        key={i}
                    >
                        {error}
                    </div>
                ))}
                <h1 className="text-2xl font-bold">Login</h1>
                <form onSubmit={onSubmit}>
                    <input
                        type="email"
                        {...register("email", { required: true })}
                        className="w-full bg-zinc-700 text-white px-4 py-2 my-3 rounded-md"
                        placeholder="email"
                    />
                    {errors.email && (
                        <p className="text-red-800">Email is required</p>
                    )}
                    <input
                        type="password"
                        {...register("password", { required: true })}
                        className="w-full bg-zinc-700 text-white px-4 py-2 my-3 rounded-md"
                        placeholder="password"
                    />
                    {errors.password && (
                        <p className="text-red-800">Password is required</p>
                    )}
                    <button
                        type="submit"
                        className="bg-sky-400 border-2 border-blue-800 px-5 py-2 rounded-lg"
                    >
                        Login
                    </button>
                </form>

                <p className="flex gap-2 justify-between">
                    Don´t have an account?{" "}
                    <Link to="/register" className="text-red-700">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}
