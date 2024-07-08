import characters from "../model/characters.model.js";

export const getcharacters=async(req,res)=>{
    try {
        const Characters=await characters.find()
        res.status(200).json(Characters)
    } catch (error) {
        console.log("getting error while fetching all characters",error)
        res.status(500).json(error)
    }
} 
