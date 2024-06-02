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

export const searchCourses = async (req: Request, res: Response) => {
    const { query } = req.query;
    try {
      const courses = await Course.find({ title: { $regex: query, $options: 'i' } });
      res.status(200).json(courses);
    } catch (error) {
      res.status(400).json({ error: 'Unable to search courses' });
    }
  };

export const getCourseDetails = async (req: Request, res: Response) => {
const { id } = req.params;
try {
    const course = await Course.findById(id).populate('instructor', 'name');
    if (!course) {
    return res.status(404).json({ error: 'Course not found' });
    }
    res.status(200).json(course);
} catch (error) {
    res.status(400).json({ error: 'Unable to fetch course details' });
}
};

export const deleteCourse = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const course = await Course.findByIdAndDelete(id);
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }
    res.status(200).json({ message: 'Course deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Course deletion failed' });
  }
};