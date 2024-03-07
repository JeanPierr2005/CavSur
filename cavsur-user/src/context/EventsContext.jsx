import { createContext, useContext, useState } from "react";
import {
    createEventRequest,
    getEventsRequest,
    deleteEventRequest,
    getEventRequest,
    updateEventRequest,
} from "../api/events";

const EventContext = createContext();

export const useEvents = () => {
    const context = useContext(EventContext);

    if (!context)
        throw new Error("useEvents must be used within a MatchProvider");
    return context;
};

export function EventProvider({ children }) {
    const [events, setEvents] = useState([]);

    const getEvents = async () => {
        try {
            const res = await getEventsRequest();
            setEvents(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const createEvent = async (event) => {
        try {
            const res = await createEventRequest(event);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteEvent = async (id) => {
        try {
            const res = await deleteEventRequest(id);
            if (res.status === 204)
                setEvents(events.filter((event) => event._id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    const getEvent = async (id) => {
        try {
            const res = await getEventRequest(id);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    };

    const updateEvent = async (id, event) => {
        try {
            await updateEventRequest(id,event)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <EventContext.Provider
            value={{
                events,
                createEvent,
                getEvents,
                deleteEvent,
                getEvent,
                updateEvent,
            }}
        >
            {children}
        </EventContext.Provider>
    );
}
