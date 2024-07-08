import express from "express";
import { getcharacters } from "../controller/characters.controller.js";

const router=express.Router();

router.get('/',getcharacters);

export default router;