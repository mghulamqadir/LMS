import mongoose, { Schema, model } from "mongoose";
const laundryItemSchema = new Schema( {
    name: { type: String, required: true },
    description: { type: String },
} );
const laundryItem = model( "LaundryItem", laundryItemSchema );

export default { laundryItem };