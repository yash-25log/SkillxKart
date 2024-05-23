import mongoose , {Document, Schema } from "mongoose";
export interface ContentDocument extends Document {
    name:string;
    description?:string;
    lesson_id:mongoose.Schema.Types.ObjectId;
    file:string;
} 
const ContentSchema = new Schema<ContentDocument>({
    name :{
        type:String,
        required:true,
        trim:true,
    },
    description :{
        type:String,
        trim:true,
    },
    lesson_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
    },
    file:{
        type:String,
        required:true,
    }

})
const Content = mongoose.model<ContentDocument>("Content",ContentSchema);
export default Content;