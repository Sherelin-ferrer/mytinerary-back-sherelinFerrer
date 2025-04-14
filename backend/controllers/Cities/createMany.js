import city from "../../models/city.js";

const createManyCities = async (req, res, next) => {
    try {
        const cities = req.body;
        const newCities = await city.insertMany(cities);

        res.status(200).json({
            message: "Ciudades creadas con éxito",
            data: newCities
        });
    } catch (error) {
        next(error);
    }
};

export default createManyCities;
