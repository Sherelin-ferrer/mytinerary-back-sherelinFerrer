import user from "../../models/User.js";

const updateUser = async (req, res, next) => {
  try {
    await user.updateOne(
      { _id: req.body._id }, 
      { name: req.body.name }
    );
    return res.status(200).json({ response: updateUser });
  } catch (error) {
    next(error);
  }
};

export default updateUser;
