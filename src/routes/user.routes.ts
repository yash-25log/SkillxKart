import express, {Router} from "express";
import { register}  from "../controllers/user.controllers";
const user: Router = express.Router();

user.post("/",register);

module.exports = user;