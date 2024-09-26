"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: { type: String, required: [true, "Name is required"] },
    price: { type: Number, required: [true, "Price is required"] },
    stockQuantity: {
        type: Number,
        required: [true, "Stock Quantity is required"],
    },
    description: { type: String },
    image: { type: String },
    category: { type: String },
});
exports.ProductModel = (0, mongoose_1.model)("Product", productSchema);
