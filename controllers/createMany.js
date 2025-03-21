const createManyCities = async (req, res) => {
    try {
        const cities = await City.insertMany(req.body);
        res.status(201).json(cities);
    } catch (error) {
        res.status(400).json({ message: "Error al crear las ciudades", error });
    }
};
export default createManyCities