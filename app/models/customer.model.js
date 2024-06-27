import mongoose, { Schema, Types, model } from "mongoose";

const AddressSchema = Schema({
    houseNumber: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String },
});

const customerSchema = new Schema({
    customerName: { type: String, required: true },
    customerPhone: { type: String, required: false },
    customerId: { type: String, required: true, index: true, unique: true, default: 0 },
    customerAdress: AddressSchema,
    order: {
        type: Types.ObjectId,
        ref: "Order",
        required: true
    },
    orderStatus: {
        type: String,
        required: true,
        default: "Processing",
    },
    createdBy: {
        type: String,
        required: true
    }
})


const Customer = model("Customer", customerSchema);

export default { Customer }