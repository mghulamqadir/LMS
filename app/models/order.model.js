import mongoose, { Schema, Types, model } from "mongoose";

const orderSchema = new Schema( {
    oderNumber: { type: Number, required: true },
    selectedItem: {
        type: Types.ObjectId,
        ref: "LaundryItem",
        required: true
    },
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
    }
} );

const Order = model( "Order", orderSchema );

export default { Order };