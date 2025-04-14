import activity from "../../models/activities.js";


const createActivity = async (req, res, next) => {
  try {
    const newActivity = new activity(req.body);
    await newActivity.save();
    res.status(200).json(newActivity);
  } catch (error) {
    next(error);
  }
};

export default createActivity;
