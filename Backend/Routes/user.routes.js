
const express = require('express');
const jwt = require('jsonwebtoken');
const { userModel } = require('../Models/user.model');
const bcrypt = require("bcrypt")
require("dotenv").config()

const userRouter = express.Router()

// userRouter.get("/homepage", async (req, res) => {

//     res.status(200).send({ "msg": "HOME Page" })
// })

userRouter.post("/register", async (req, res) => {
    const { name, email,mobile_No, password,  age,role} = req.body
    try {
        let userPresent= await userModel.findOne({email})
        if(userPresent){
            res.status(409).send({ "msg": "User Already Exists" });

        }
        bcrypt.hash(password, 5, async (err, hash) => {
            const user = new userModel({ name, email,mobile_No, password: hash,  age,role})
            await user.save()
            res.status(200).send({ "msg": "registration done succesfully" })
        })

    } catch (err) {
        res.status(400).send({ "msg": "registration failed" })
    }

})
userRouter.post("/login", async (req, res) => {
    let { email, password } = req.body
    try {
        const user = await userModel.findOne({email})
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if (result) {
                    res.status(200).send({ "msg": "login succesfully","name":user.name,user, "token": jwt.sign({ "userID":user._id,role:user.role }, process.env.JWT_Secret, { expiresIn: '3h' }) })
                } else {
                    res.status(400).send({ "msg": "login failed" })
                }
            })

        }else{
            res.status(404).send({ "msg": "User not found you need to Register" })
        }

    } catch (err) {
        res.status(400).send({ "msg": err.massage })
    }

})



module.exports = { userRouter }