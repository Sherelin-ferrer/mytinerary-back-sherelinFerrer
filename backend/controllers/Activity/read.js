
import activity from "../../models/activities.js";

const AllActivity = async (req, res) => {
  try {
    const activities = await activity.find();
    res.json(activities);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las actividades", error });
  }
};


export default AllActivity 