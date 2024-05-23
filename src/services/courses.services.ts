import Course from "../models/courses.models";

export async function CREATE_COURSE(BODY: any) {
    try{
        const course_data = await Course.create(BODY);
        return course_data;

    }catch(error){
        console.log(error);
      return ({msg:"internal server error",error})
    }
    
    
}
export async function GET_COURSE_DATA(_id:String){
    try {
        const course_data= await Course.find({educator_id:_id });
        return course_data;

    } catch (error) {
        console.log(error);
    }

}