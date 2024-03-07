import { useForm } from "react-hook-form";
import { useMatches } from "../context/MatchesContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc)

export default function MatchesFormPage() {
    const { register, handleSubmit, setValue } = useForm();
    const { createMatch, getMatch, updateMatch } = useMatches();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        async function loadMatch() {
            if (params.id) {
                const match = await getMatch(params.id);
                setValue("location", match.location);
                setValue("num_referee", match.num_referee);
                setValue("activity", match.activity);
                setValue("details", match.details);
            }
        }
        loadMatch();
    }, []);

    const onSubmit = handleSubmit((data) => {
        if (params.id) {
            updateMatch(params.id, {
                ...data,
                date: dayjs.utc(data.date).format(),
            });
        } else {
            createMatch({
                ...data,
                date: dayjs.utc(data.date).format(),
            });
        }

        navigate("/matches");
    });

    return (
        <div className="bg-[#d5deef] flex items-center justify-center w-full h-full p-10 ">
            <form onSubmit={onSubmit}>
                <label htmlFor="location">Ubicacion</label>
                <input
                    type="text"
                    placeholder="Ubicacion"
                    {...register("location")}
                    className="w-full bg-white text-black px-4 py-2 mb-2 brounded-md"
                    autoFocus
                />
                <label htmlFor="num_referee">Numero de arbitros</label>
                <input
                    type="number"
                    placeholder="Número de Árbitros"
                    {...register("num_referee")}
                    className="w-full bg-white text-black px-4 py-2 mb-2 rounded-md"
                />
                <label htmlFor="date">Fecha</label>
                <input
                    type="date"
                    {...register("date")}
                    className="w-full px-4 py-2 mb-2 bg-white rounded-md"
                />

                <label htmlFor="activity">Actividad</label>
                <textarea
                    rows="3"
                    placeholder="Actividad"
                    {...register("activity")}
                    className="w-full bg-white text-black px-4 py-2 mb-2 rounded-md"
                ></textarea>

                <label htmlFor="details">Detalles</label>
                <textarea
                    rows="3"
                    placeholder="Detalles"
                    {...register("details")}
                    className="w-full bg-white text-blacke px-4 py-2 mb-2 rounded-md"
                ></textarea>
                <button className="bg-[#638ecb] text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline">
                    Save
                </button>
                <button className="bg-red-700 text-white px-4 py-2 mx-3 rounded focus:outline-none focus:shadow-outline">
                    <Link to="/matches">cancelar</Link>
                </button>
            </form>
        </div>
    );
}
