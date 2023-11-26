const jwt=require("jsonwebtoken")
require("dotenv").config()

const auth=(req,res,next)=>{
    const token=req.headers.authorization
    console.log(token)
    if(token){
       const decoded= jwt.verify(token,process.env.JWT_Secret)
       if(decoded){
        req.body.userID=decoded.userID
        req.body.role=decoded.role
        next()
       }else{
        res.status(400).send({"Msz":"Plz Login First"})
       }
    }else{
        res.status(400).send({"msz":"Didn't Login"})
    }
}

module.exports={
    auth
}