import mongoose from 'mongoose';

const MainCharactersSchema=mongoose.Schema({
    name:String,
    image:String,
    desc:String,
    link:String
})
const MainCharacters = mongoose.model("MainCharacters",MainCharactersSchema)
export default MainCharacters;