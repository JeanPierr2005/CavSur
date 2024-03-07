import { useEvents } from "../context/EventsContext";
import { Link } from "react-router-dom";

import days from "dayjs";
import utc from "dayjs/plugin/utc";
days.extend(utc);

export default function EventCard({ event }) {
    const { deleteEvent } = useEvents();

    return (
        <div className="bg-slate-200 max-w-md w-full p-10 my-2 mx-3 shadow-lg rounded-md">
            <h1 className="text-2xl font-bold">{event.activity}</h1>
            <p>{event.location}</p>
            <p>{event.num_referee}</p>
            <p>{days(event.date).utc().format("DD/MM/YYYY")}</p>
            <div className="flex gap-2 items-center">
            <Link to={`/events/${event._id}`} className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 my-4 rounded-md">Actualizar</Link>
                <button
                    onClick={() => {
                        deleteEvent(event._id);
                    }}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 my-4 rounded-md"
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
}
