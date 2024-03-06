import Match from "../models/match.model.js";

export const getMatches = async (req, res) => {
    const matches = await Match.find({
        user: req.user.id,
    }).populate("user");
    res.json(matches);
};

export const getMatch = async (req, res) => {
    const match = await Match.findById(req.params.id).populate("user");
    if (!match) return res.status(404).json({ message: "Match not found" });
    res.json(match);
};

export const createMatch = async (req, res) => {
    const { location, date, activity, num_referee, details } = req.body;

    const newMatch = new Match({
        location,
        date,
        activity,
        num_referee,
        details,
        user: req.user.id,
    });
    const savedMatch = await newMatch.save();
    res.json(savedMatch);
};


export const deleteMatch = async (req, res) => {
    const match = await Match.findByIdAndDelete(req.params.id);
    if (!match) return res.status(404).json({ message: "Match not found" });
    return res.sendStatus(204);
};

export const updateMatch = async (req, res) => {
    const match = await Match.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    if (!match) return res.status(404).json({ message: "Match not found" });
    res.json(match);
};
