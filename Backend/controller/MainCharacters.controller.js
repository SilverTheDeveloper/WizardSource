import MainCharacters from "../model/MainCharacters.model.js";

export const GetMainCharacters=async(req,res)=>{
    try {
        const maincharacter=await MainCharacters.find()
        res.status(200).json(maincharacter)
    } catch ( error) {
        console.log("getting error while fetching main characters",error)
        res.status(500).json(error)
    }
}