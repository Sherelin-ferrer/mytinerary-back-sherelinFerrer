import user from "../../models/User.js";

const AllUsers = async (req, res) => {
    try {
        const Users= await user.find();
        res.json(Users);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los usuarios", error });
    }
}; 

export default AllUsers