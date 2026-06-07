const userModel=require("../models/userModel")
const jwt=require("jsonwebtoken")


const registerUser=async(req, res)=>{


    try {
        const {name,email,password}=req.body;
        if(!name || !email || !password){
            return res.json({success:false,message:"please enter all the fields"})
        }
        const isUserExist=await userModel.findOne({email})

    if(isUserExist){
        return res.status(409).json({
            message:"Email alread exist"
        })
    }
     const user=await userModel.create({
        name,email,password
    })

     //sign is for creating token
    const token=jwt.sign({
        id:user._id
    },process.env.JWT_SECRET)

    res.cookie("token",token ,{
          httpOnly: true,
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000
    })

    res.status(201).json({
        traceId: req.traceId,
        success:true,
        message:"User Registered successfully",
        user:{
            id:user._id,
            name:user.name,
            email:user.email

        }
    })
    } catch (error) {
         console.log(error);
        res.json({success:false,message:"user registered failed"}) 
    }
 
}

// login user
const loginUser=async(req, res)=>{
    try{
        const {email,password}=req.body;
        if(!email || !password){
            return res.json({traceId: req.traceId,success:false, message:"please enter all the fields"})
        }
        const user=await userModel.findOne({email});
        if(!user){
            return res.json({success:false, message:"User not found"})
        }
        const token=await jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1d"})
        res.cookie("token",token,{httpOnly:true,sameSite:"strict",maxAge:24*60*60*1000})
            .json({success:true, user: { name: user.name, id: user._id } ,
                 message:"user login sucessfully",token,})
    }catch(error){
        console.log(error);
        res.json({success:false,message:"user login failed"}) 
    }
}

module.exports={registerUser,loginUser};