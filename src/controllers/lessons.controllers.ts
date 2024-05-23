import Lesson from "../models/lessons.models";
import { Request,Response } from "express";
import { CREATE_LESSON, GET_LESSON_DATA } from "../services/lessons.services";
  export async function create_lesson(req: Request, res: Response) {
    try {
      const BODY = req.body;
      const lesson_data = await CREATE_LESSON(BODY);
      return res.status(201).json({msg:"Course has been created successfully.",lesson_data});
    } catch (error) {
      console.log(error);
      return res.status(500).json({msg:"internal server error",error})
    }
  }
  export async function get_lesson(req:Request,res:Response) {
    try{
        const c_id = req.body.course_id;
        const lesson_data= await GET_LESSON_DATA(c_id);
        return res.status(200).json({msg:"Lessons fetched.",lesson_data});

    }
    catch(error){
        console.log(error);
        return res.status(500).json({msg:"internal server error",error})
    }
    
  }