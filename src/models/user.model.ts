import mongoose, {Document, Schema} from "mongoose";

export interface IUser extends Document{
    name:string;
	bio :string;
	email:string;
	password: string;
	username: string;
	role:{
        educators:[
            {
                educator_id: mongoose.Schema.Types.ObjectId;
                educator_name: string;
            }
        ];
        users:[
            {
                user_id: mongoose.Schema.Types.ObjectId;
                user_name: string;
            }

        ];
    },
	domain: string;
	organization:string;
}

const UserSchema = new Schema<IUser>({
    name:{
        type: String,
        required : true,
    },
    bio:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    password:{
        type: String,
        required: true,
        
    },
    username:{
        type: String,
        required: true,
        lowercase: true,
        unique: true,

    },
    role:{
        educator:[
            {
                educator_id: mongoose.Schema.Types.ObjectId,
                educator_name: String,
            },
        ],
        user:[
            {
                user_id: mongoose.Schema.Types.ObjectId,
                user_name: String,
            },
        ],
    },
    domain: {
        type: String,
        required: true,
    },
    organization: {
        type: String,
        required: true,
    }
})


const User = mongoose.model<IUser>("User", UserSchema);
export default User;