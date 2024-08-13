import mongoose from "mongoose";

const userSchema = new mongoose.Schema<IUser>({
    displayName:{
        type:String,
    },
    email:{
        type:String,
    },
    emailVerified: {
        type:Boolean,
    },
    password: {
        type:String,
    },
    profileImage: {
        type:String,
    }    
});

export default mongoose.models?.User || mongoose.model("User", userSchema);