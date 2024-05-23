import { CREATE_CONTENT, GET_CONTENT_DATA } from "../services/content.services";
import { cloud } from "../utils/cloudinary";
import { Response,Request } from "express";
export async function create_content(req:Request,res:Response){
    try{
        const Body = req.body;
        Body.file = await cloud();
        const content_data = await CREATE_CONTENT(Body);
        return res.status(201).json({msg:"Content created sucessfully",content_data});
    }catch(error){
        return res.status(500).json({msg:"internal server error",error})
    }
}
export async function get_content(req:Request,res:Response){
    try{
        const l_id = req.body.lesson_id;
        const content_data = await GET_CONTENT_DATA(l_id);
        return res.status(200).json({msg:"content data fetched",content_data});

    }catch(error){
       return res.status(500).json({msg:"internal server error",error});
    }
}