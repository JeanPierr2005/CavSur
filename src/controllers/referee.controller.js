import Referee from "../models/referee.model.js"

export const getReferees = async (req, res) => {
    const referees = await Referee.find({
        user: req.user.id,
    }).populate("user");
    res.json(referees);
};

export const getReferee = async (req, res) => {
    const referee = await Referee.findById(req.params.id).populate("user");
    if (!referee) return res.status(404).json({ message: "Referee not fund" });
    res.json(referee);
};

export const createReferee = async (req, res) => {
    const { name, lastname, num_document, phone } = req.body;

    const newReferee = new Referee({
        name,
        lastname,
        num_document,
        phone,
        user: req.user.id,
    });
    const savedReferee = await newReferee.save();
    res.json(savedReferee);
};

export const deleteReferee = async (req, res) => {
    const referee = await Referre.findByIdAndDelete(req.params.id);
    if (!referee) return res.status(404).json({ message: "Referee not found" });
    return res.sendStatus(204);
};

export const updateReferee = async (req, res) => {
    const referee = await Referee.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    if (!referee) return res.status(404).json({ message: "Referee not found" });
    res.json(referee);
};
