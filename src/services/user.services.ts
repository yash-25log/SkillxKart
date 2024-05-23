
import User, { IUser } from "../models/user.models";

export async function IS_USER_PRESENT(email: string) {
    try {
      const user = await User.findOne({ email: email });
      if (user) {
        return user;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
  
  export async function CREATE_USER(body: any) {
    try {
      const { user,email } = body;
      console.log("service body =>", body);
      body.user_meta_id = user._id;
      const user_data = await User.create(body);
      return user_data;
    } catch (error) {
      
      throw error;
    }
  }
  
  