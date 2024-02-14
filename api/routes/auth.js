const router = require("express").Router();
const user = require("../models/user");


//Register
router.post("/register", (req,res) =>{
    const newUser = new user({
        username:req.body.username
    })
})