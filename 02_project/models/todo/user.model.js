import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
    username:{
        type : String,
        required : true,
        unique: true,
        lowercase:true
    },
    email : {
        type : String,
        required : true,
    }
    },
    {
    timestamps:true //plural hoga (update at ,created at)
    }
)


export const User = mongoose.model("User",UserSchema);