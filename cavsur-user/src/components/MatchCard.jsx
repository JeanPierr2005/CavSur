import { useMatches } from "../context/MatchesContext";
import { Link } from "react-router-dom";

import days from "dayjs";
import utc from "dayjs/plugin/utc";
days.extend(utc);

export default function MatchCard({ match }) {
    const { deleteMatch } = useMatches();

    return (
        <div className="bg-slate-200 max-w-md w-full p-10 my-2 mx-3 shadow-lg rounded-md">
            <h1 className="text-2xl font-bold">{match.activity}</h1>
            <p>Ubicacion: {match.location}</p>
            <p>Número de Árbitros: {match.num_referee}</p>
            <p>Detalles: {match.details}</p>
            <p>Fecha: {days(match.date).utc().format("DD/MM/YYYY")}</p>
            <div className="flex gap-2 items-center">
                <Link to={`/matches/${match._id}`} className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 my-4 rounded-md">Actualizar</Link>
                <button
                    onClick={() => {
                        deleteMatch(match._id);
                    }}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 my-4 rounded-md"
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
}
