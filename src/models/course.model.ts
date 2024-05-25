import { Schema, model, Document } from "mongoose"; 

interface IContent {
     type: "video" | "text" | "quiz"; 
     title: string; 
     data: string; 
} 

interface IReview { 
    learner: Schema.Types.ObjectId; 
    rating: number; 
    comment: string; 
} 

interface ICourse extends Document { 
    title: string; 
    description: string; 
    price: number; 
    instructor: Schema.Types.ObjectId; 
    content: IContent[]; 
    reviews: IReview[]; 
} 

const courseSchema = new Schema<ICourse>( 
    { 
        title: { 
            type: String, 
            required: true 
        }, 
        description: { 
            type: String, 
            required: true 
        }, 
        price: { 
            type: Number, 
            required: true 
        }, 
        instructor: { 
            type: Schema.Types.ObjectId, 
            ref: "User", 
            required: true 
        }, 
        content: [ 
            { 
                type: { 
                    type: String, 
                    enum: ["video", "text", "quiz"], 
                    required: true 
                }, 
                title: { 
                    type: String, 
                    required: true 
                }, 
                data: { 
                    type: String, 
                    required: true 
                }, 
            }, 
        ], 
        reviews: [ 
            { 
                learner: { 
                    type: Schema.Types.ObjectId, 
                    ref: "User" 
                }, 
                rating: { 
                    type: Number, 
                    required: true 
                }, 
                comment: { 
                    type: String 
                }, 
            }, 
        ], 
    }, { timestamps: true } 
); 
    
export default model<ICourse>("Course", courseSchema);