import { Request, Response } from 'express'; 
import Course from '../models/course.model'; 

export const getAllCourses = async (req: Request, res: Response) => { 
    try { 
        const courses = await Course.find(); 
        res.status(200).json(courses); 
    } 
    catch (error) { 
        res.status(400).json({ error: 'Unable to fetch courses' }); 
    } 
};