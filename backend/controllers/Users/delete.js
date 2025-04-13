import user from "../../models/User.js";

const deleteUser = async (req, res, next) => {
  try {
    await user.deleteOne(
      { _id: req.body._id }, 
      { name: req.body.name }
    );
    return res.status(200).json({ response: user });
  } catch (error) {
    next(error);
  }
};

export default deleteUser;