import { Request, Response, response } from 'express';
import express, { Router } from "express";
import { create_course} from "../controllers/courses.controllers";
const course: Router = express.Router();

course.post("/create", create_course);

module.exports = course;
