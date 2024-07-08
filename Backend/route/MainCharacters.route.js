import express from 'express';
import { GetMainCharacters } from '../controller/MainCharacters.controller.js';

const router=express.Router();

router.get('/',GetMainCharacters);

export default router;