import city from "../../models/city.js";

const createCity = async (req, res, next) => {
    try {
        const newCity = new city(req.body);
        await newCity.save();
        res.status(201).json(newCity);
    }catch (error) {
        next(error)
    }
};
export default createCity


