import { useEffect } from "react";
import { useEvents } from "../context/EventsContext";
import { Link } from "react-router-dom";
import EventCard from "../components/EventCard";

export default function EventPage() {
    const { getEvents, events } = useEvents();

    useEffect(() => {
        getEvents();
    }, []);

    if (events.length === 0)
        return (
            <button className="bg-blue-500 text-white px-4 py-2 m-3 rounded focus:outline-none focus:shadow-outline">
                <Link to="/add-event">Añadir Evento</Link>
            </button>
        );

    return (
        <div>
            <button className="bg-blue-500 text-white px-4 py-2 m-3 rounded focus:outline-none focus:shadow-outline">
                <Link to="/add-event">Añadir Evento</Link>
            </button>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
                {events.map((event) => (
                    <EventCard event={event} key={event._id} />
                ))}
            </div>
        </div>
    );
}
