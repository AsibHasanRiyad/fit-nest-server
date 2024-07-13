import { model, Schema } from "mongoose";
import { TProduct } from "./product.interface";

const productSchema = new Schema<TProduct>({
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

export const ProductModel = model<TProduct>("Product", productSchema);
