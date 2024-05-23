import express,{Router} from "express";
import { create_content,get_content } from "../controllers/content.controllers";
const content:Router= express.Router();
content.post("/create", create_content);
content.get("/get", get_content);

module.exports = content;