import user from "../../models/User.js";

const AllUsers = async (req, res,next) => {
    try {
        let queryParams = req.query
        console.log(queryParams)
        let { name} = req.query
        let query = {}

        if (name) {
           
            query.name = {$regex: name , $options: "i"}
        } console.log("query por name")
       

        const Users = await user.find(query);
        res.json(Users);
    } catch (error) {
       next(error)
    }
};



export default AllUsers

