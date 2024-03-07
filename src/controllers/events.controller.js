import Event from "../models/event.model.js";

export const getEvents = async (req, res) => {
    try {
        const events = await Event.find({
            user: req.user.id,
        }).populate("user");
        res.json(events);
    } catch (error) {
        return res.status(500).json({ message: "something went wrong" });
    }
};

export const createEvent = async (req, res) => {
    try {
        const { location, date, activity, num_referee } = req.body;

        const newEvent = new Event({
            location,
            date,
            activity,
            num_referee,
            user: req.user.id,
        });
        const savedEvent = await newEvent.save();
        res.json(savedEvent);
    } catch (error) {
        return res.status(500).json({ message: "something went wrong" });
    }
};

export const getEvent = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id).populate("user");
        if (!event) return res.status(404).json({ message: "Event not found" });
        res.json(event);
    } catch (error) {
        return res.status(404).json({ message: "Event not found" });
    }
};

export const deleteEvent = async (req, res) => {
    try {
        const event = await Event.findByIdAndDelete(req.params.id);
        if (!event) return res.status(404).json({ message: "Event not found" });
        return res.sendStatus(204);
    } catch (error) {
        return res.status(404).json({ message: "Event not found" });
    }
};

export const updateEvent = async (req, res) => {
    try {
        const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!event) return res.status(404).json({ message: "Event not found" });
        res.json(event);
    } catch (error) {
        return res.status(404).json({ message: "Event not found" });
    }
};
