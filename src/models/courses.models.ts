import mongoose, { Document, Schema } from "mongoose";
export interface CourseDocument extends Document {
    title: string;
    description: string;
    // image?: string;
    educator_id?: mongoose.Schema.Types.ObjectId;
}

const CourseSchema = new Schema<CourseDocument>({
    title: {
        type: String,
        required: true,
        trim: true,
    },

    description: {
        type: String,
        required: true,
        trim: true,

    },
    // image: {
    //     type: String,
    // },
    educator_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },

});

const Course = mongoose.model<CourseDocument>("Course", CourseSchema);
export default Course;
