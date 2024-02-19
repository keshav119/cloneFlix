const router = require("express").Router();
const Movie = require("../models/movie");
const verify = require("../verifyToken");

//CREATE

router.post("/", verify, async (req,res)=>{
    if (req.user.isAdmin) {
        const newMovie = new Movie(req.body);

        try{
            const savedMovie = await newMovie.save();
            res.status(200).json(savedMovie);
        }catch(err){
            res.status(500).json(err);
        }
    }
    else{
        res.status(403).json("You are not authorized to add movies!");
    }
});

//DELETE

//GET




module.exports = router;