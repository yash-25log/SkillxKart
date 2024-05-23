import Course from "../models/courses.models";
import { Request,Response } from "express";
import { CREATE_COURSE,GET_COURSE_DATA } from "../services/courses.services";
  export async function create_course(req: Request, res: Response) {
    try {
        const BODY = req.body;
      const course_data = await CREATE_COURSE(BODY);
      return res.status(201).json({msg:"Course has been created successfully.",course_data});
    } catch (error) {
      console.log(error);
      return res.status(500).json({msg:"internal server error",error})
    }
  }
  export async function get_courses(req:Request,res:Response){
    const _id = req.body.educator_id;
    try{
      const course_data = await GET_COURSE_DATA(_id);
      return res.status(200).json({msg:"Course Fetched Sucessfully",course_data});

    }catch(error){
      return res.status(500).json({msg:"internal server error",error})
    }
  }