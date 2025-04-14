import itinerary from "../../models/Itinerary.js";

const updateItineray = async (req, res, next) => {
    try {
        await itinerary.updateOne(
            { _id: req.body._id },
            { name: req.body.name }
        );
        return res.status(200).json({ response: "modificación  de Itineray exitosa" });
    } catch (error) {
        next(error);
    }
};

export default updateItineray;
