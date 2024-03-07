import { useEvents } from "../context/EventsContext";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

export default function EventFormPage() {
    const { register, handleSubmit, setValue } = useForm();
    const { createEvent,getEvent,updateEvent } = useEvents();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        async function loadEvent() {
            if (params.id) {
                const event = await getEvent(params.id);
                setValue("location", event.location);
                setValue("num_referee", event.num_referee);
                setValue("activity", event.activity);
            }
        }
        loadEvent();
    }, []);

    const onSubmit = handleSubmit((data) => {
        if (params.id) {
            updateEvent(params.id, {
                ...data,
                date: dayjs.utc(data.date).format(),
            });
        } else {
            createEvent({
                ...data,
                date: dayjs.utc(data.date).format(),
            });
        }

        navigate("/events");
    });

    return (
        <div className="bg-[#d5deef] flex items-center justify-center w-full h-full p-10 ">
            <form onSubmit={onSubmit}>
                <label htmlFor="location">Ubicacion</label>
                <input
                    type="text"
                    placeholder="Ubicacion"
                    {...register("location")}
                    className="w-full bg-white text-black px-4 py-2 mb-2 brounded-md border-black"
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
                <button className="bg-[#638ecb] text-white px-4 py-2 rounded-md">Save</button>
                <button className="bg-red-700 text-white px-4 py-2 mx-3 rounded focus:outline-none focus:shadow-outline">
                    <Link to="/events">cancelar</Link>
                </button>
            </form>
        </div>
    );
}
