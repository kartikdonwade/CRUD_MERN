import User from "../models/userModel.js";

export const create = async (req, res) => {
    try {
const udata =new User(req.body);
if(!udata){
    res.status(404).json({message: "User not found"});
}
const savedata =await udata.save();
res.status(200).json({message: savedata});


    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

export const getall = async (req, res) => {
    try {
        const userdata = await User.find();
    if(!userdata){
        res.status(404).json({message: "User not found"});
    }
    res.status(200).json(userdata);
    } catch (error) {
          res.status(500).json({ message: err.message });  
    }
}

export const getone = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist= await User.findById(id);
        if(!userExist){
                 res.status(404).json({ message: "User not found" });
        }
res.status(200).json(userExist);
    } catch (error) {
         res.status(500).json({ message: err.message });  
    }
}