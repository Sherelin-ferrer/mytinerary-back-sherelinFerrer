import city from "../models/city.js";

const createCity = async (req, res, next) => {
    try {
        const newCity = new city(req.body);
        await newCity.save();
        res.status(201).json(newCity);
    } catch (error) {
        res.status(400).json({ message: "Error al crear la ciudad", error });
    }
};
 export default createCity


