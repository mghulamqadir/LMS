import mongoose, { Schema, Types, model } from "mongoose";

const laundryItemsSchema = new Schema( {
    name: { type: String, required: true },
    description: { type: String },
} );

const orderSchema = new Schema( {
    oderNumber: { type: Number, required: true },
    selectedItem: laundryItemsSchema,
    payment: {
        type: Number,
        required: true,
        default: 0
    },
    orderStatus: {
        type: String,
        required: true,
    },
    deliveryDate: {
        type: Date,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    urgent:{
        type:Boolean,
        required:true,
        default:false
    },
    
} );

const Order = model( "Order", orderSchema );

export default { Order };