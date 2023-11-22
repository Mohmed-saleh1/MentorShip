import mongoose, { Schema, Document, Model } from "mongoose";

export interface User extends Document {
    name: string;
    email: string;
    password: string;
}

const userSchema: Schema<User> = new Schema({
    name: String,
    email: {
        required: true,
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: [6,'the password length should be at least 6 chars'],
    },
});

const User: Model<User> = mongoose.model<User>("User", userSchema);

export default User;
