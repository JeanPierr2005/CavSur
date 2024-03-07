import Match from "../models/match.model.js";

export const getMatches = async (req, res) => {
    try {
        const matches = await Match.find({
            user: req.user.id,
        }).populate("user");
        res.json(matches);
    } catch (error) {
        return res.status(500).json({ message: "something went wrong" });
    }
};

export const createMatch = async (req, res) => {
    try {
        const { location, date, activity, num_referee, details } = req.body;

        const newMatch = new Match({
            location,
            num_referee,
            date,
            activity,
            details,
            user: req.user.id,
        });
        const savedMatch = await newMatch.save();
        res.json(savedMatch);
    } catch (error) {
        return res.status(500).json({ message: "something went wrong" });
    }
};

export const getMatch = async (req, res) => {
    try {
        const match = await Match.findById(req.params.id).populate("user");
        if (!match) return res.status(404).json({ message: "Match not found" });
        res.json(match);
    } catch (error) {
        return res.status(404).json({ message: "Match not found" });
    }
};

export const deleteMatch = async (req, res) => {
    try {
        const match = await Match.findByIdAndDelete(req.params.id);
        if (!match) return res.status(404).json({ message: "Match not found" });
        return res.sendStatus(204);
    } catch (error) {}
    return res.status(404).json({ message: "Match not found" });
};

export const updateMatch = async (req, res) => {
    try {
        const match = await Match.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!match) return res.status(404).json({ message: "Match not found" });
        res.json(match);
    } catch (error) {
        return res.status(404).json({ message: "Match not found" });
    }
};
