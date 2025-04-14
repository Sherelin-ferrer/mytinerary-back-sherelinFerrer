import Itinerary from "../../models/Itinerary.js";

const deleteItinerary = async (req, res, next) => {
    try {
        await Itinerary.deleteOne(
            { _id: req.body._id },
            { name: req.body.name }
        );
        return res.status(200).json({ response: "eliminado Itinerary con exito" });
    } catch (error) {
        next(error);
    }
};

export default deleteItinerary;