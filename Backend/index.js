import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import MainCharacterRouter from './route/MainCharacters.route.js'
import charactersRouter from 
'./route/character.route.js'

const app = express()

app.use(cors());

dotenv.config();

const PORT =process.env.PORT||4000
const URI = process.env.MongoDBURI

//connect to mongodb
try {
  mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
  });
  console.log("connected to mongodb")
} catch (error) {
  console.log("error :",error)
}

 
//defining routes
app.use('/maincharacter',MainCharacterRouter);

app.use('/characters',charactersRouter );

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})