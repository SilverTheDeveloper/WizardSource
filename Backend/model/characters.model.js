import mongoose from "mongoose";

const charactersSchema=mongoose.Schema({
    name:String,
    image:String,
    details:String
})
const characters=mongoose.model("characters", charactersSchema);
export default characters
