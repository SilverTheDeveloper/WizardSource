import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import MainCharacterRouter from './route/MainCharacters.route.js';
import charactersRouter from './route/character.route.js';

const app = express();

app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;


mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tls: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});


app.use('/maincharacter', MainCharacterRouter);
app.use('/characters', charactersRouter);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
