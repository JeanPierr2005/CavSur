import { useForm } from "react-hook-form";
import { useReferees } from "../context/RefereesContext";

export default function RefereesFormPage() {
    const { register, handleSubmit } = useForm();
    const { createReferee } = useReferees();

    const onSubmit = handleSubmit((data) => {
        createReferee(data);
    });
    return (
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Nombre"
                    {...register("name")}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
                    autoFocus
                />
                <input
                    type="number"
                    placeholder="Número de Documento"
                    {...register("num_document")}
                    className="w-full bg-zinc-700 text-white px-4 py-2 mb-2 rounded-md"
                />

                <input
                    type="number"
                    placeholder="Número de telefono"
                    {...register("phone")}
                    className="w-full bg-zinc-700 text-white px-4 py-2 mb-1 rounded-md"
                />
                <button>Save</button>
            </form>
        </div>
    );
}
