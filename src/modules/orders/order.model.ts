import { Schema, model } from "mongoose";
import { TOrder } from "./order.interface";

const orderSchema = new Schema<TOrder>({
  name: { type: String, required: true },
  user: {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
  },
  products: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: { type: Number, required: true },
    },
  ],
  totalPrice: { type: Number, required: true },
});

export const OrderModel = model<TOrder>("Order", orderSchema);
