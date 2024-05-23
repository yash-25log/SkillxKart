import Content from "../models/content.models";

export async function CREATE_CONTENT(BODY: any) {
    try{
        const course_data = await Content.create(BODY);
        return course_data;

    }catch(error){
        console.log(error);
      return ({msg:"internal server error",error})
    }
    
    
}
export async function GET_CONTENT_DATA(_id:String){
    try {
        const course_data= await Content.find({lesson_id:_id });
        return course_data;

    } catch (error) {
        console.log(error);
    }

}