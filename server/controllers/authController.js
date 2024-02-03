const UserModel = require('../models/userModel');
const jwt = require('jsonwebtoken');

// create jwt token
const createToken = (payload,secret,expiry)=>{
    return jwt.sign({payload},secret,{expiresIn:`${expiry}`});
}

// POST 
const registerUser = async(req,res)=>{
    try {
        const {username,name,email,password} = req.body;
        // console.log(req.body);
        if(!username || !name || !email || !password){
            return res.status(422).json({message:"Fill all details"});
        }
        const user = await UserModel.register(req.body);
        if(!user) throw Error("Registration failed");
        const token = createToken(user._id,process.env.JWT_SECRET,"2D");
        if(!token) throw Error("Token creation failed");
        //success
        res.status(200).json({message:"Registration successful",user:{
            _id:user._id,
            completedDetails:user.completedDetails,
            username:user.username,
            name:user.name,
            email:user.email
        },token});      

    } catch (error) {
        console.log(error);
        res.status(400).json({message:error.message});
    }
}

// POST
const loginUser = async(req,res)=>{
    try {
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(422).json({message:"Fill the details correctly"});
        }
        const user = await UserModel.login(email,password);
        const token = createToken(user._id,process.env.JWT_SECRET,"2D");
        if(!user){
            throw new Error("Login failed");
        }
        if(!token){
            throw new Error("Token creation failed");
        }
        //success
        res.status(200).json({message:"Login successful",user:{
            _id:user._id,
            completedDetails:user.completedDetails,
            username:user.username,
            name:user.name,
            email:user.email
        },token});
        
    } catch (error) {
        console.log(error);
        res.status(400).json({message:error.message});
    }
}

module.exports = {registerUser,loginUser};