import mongoose, { Schema, Types, model, models } from "mongoose";

const userSchema = new Schema( {
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: false },
    userId: { type: Number, required: true, index: true, unique: true, default: 0 },
    token: { type: String, default: '', index: true },
    customers: {
        type: Types.ObjectId,
        ref: "Customer"
    }
} );


const User = model( "User", userSchema );

export default { User };
