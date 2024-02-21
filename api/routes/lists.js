const router = require("express").Router();
const List = require("../models/list");
const verify = require("../verifyToken");

//CREATE

router.post("/", verify, async (req,res)=>{
    if (req.user.isAdmin) {
        const newList = new List(req.body);

        try{
            const savedList = await newList.save();
            res.status(200).json(savedList);
        }catch(err){
            res.status(500).json(err);
        }
    }
    else{
        res.status(403).json("You are not authorized to add Lists!");
    }
});

//DELETE

router.delete("/:id", verify, async (req,res) =>{
    if(req.user.isAdmin){
        try{
            await List.findByIdAndDelete(req.params.id);
            res.status(201).status("List has been deleted");
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(403).json("You are not authorized to perform this action!");
    }
});

//GET
// Fix this later. (aggregate instead of find)
router.get("/", verify, async (req,res) => {
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;
    let list = [];

    try{
        if(typeQuery){
            if(genreQuery){
                list = await List.find({ type: typeQuery, genre: genreQuery }).limit(10);
            }
            else{
                list = await List.find({ type: typeQuery }).limit(10); 
            }
        }
        else{
            list = await List.find().limit(10);
        }
        res.status(200).json(list);
    } catch (err){
        res.status(500).json(err);
    }
});

module.exports = router;