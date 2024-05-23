import mongoose,{Schema,Document} from "mongoose";
export interface LessonDocument extends Document {
    name:string;
    descriprtion?:string;
    course_id:mongoose.Schema.Types.ObjectId;

}
const LessonsSchema = new Schema<LessonDocument>({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    descriprtion:{
        type:String,
        trim:true,
    },
    course_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
    }
})
const Lesson = mongoose.model<LessonDocument>("Lesson",LessonsSchema);
export default Lesson;