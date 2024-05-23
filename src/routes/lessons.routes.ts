
import express, { Router } from "express";
import { create_lesson, get_lesson,} from "../controllers/lessons.controllers";
const lesson: Router = express.Router();

lesson.post("/create", create_lesson);
lesson.get("/get", get_lesson);

module.exports = lesson;
