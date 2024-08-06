import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    displayName:{
        type:String,
    },
    email:{
        type:String,
    },
    password: {
        type:String,
    },
    image: {
        type:String,
    }    
});

export default mongoose.models?.User || mongoose.model("User", userSchema);