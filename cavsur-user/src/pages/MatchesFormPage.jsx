import { useForm } from "react-hook-form";
import { useMatches } from "../context/MatchesContext";

export default function MatchesFormPage() {
    const { register, handleSubmit } = useForm();
    const { createMatch } = useMatches();

    const onSubmit = handleSubmit((data) => {
        createMatch(data);
    });

    return (
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Ubicacion"
                    {...register("location")}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
                    autoFocus
                />
                <input
                    type="number"
                    placeholder="Número de Árbitros"
                    {...register("num_referee")}
                    className="w-full bg-zinc-700 text-white px-4 py-2 mb-2 rounded-md"
                />

                <textarea
                    rows="3"
                    placeholder="Actividad"
                    {...register("activity")}
                    className="w-full bg-zinc-700 text-white px-4 py-2 mb-1 rounded-md"
                ></textarea>
                <button>Save</button>
            </form>
        </div>
    );
}
