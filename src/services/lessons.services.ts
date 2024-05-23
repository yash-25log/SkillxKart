import Lesson from "../models/lessons.models";

export async function CREATE_LESSON(BODY: any) {
    try{
        const lesson_data = await Lesson.create(BODY);
        return lesson_data;

    }catch(error){
        console.log(error);
      return ({msg:"internal server error",error})
    }
    
    
}
export async function GET_LESSON_DATA(_id:String){
    try {
        const lesson_data= await Lesson.find({course_id:_id });
        return lesson_data;

    } catch (error) {
        console.log(error);
    }

}