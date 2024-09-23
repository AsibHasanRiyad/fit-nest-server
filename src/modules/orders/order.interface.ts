import { Types } from "mongoose";

export type TOrderProduct = {
  productId: Types.ObjectId;
  quantity: number;
};

export type TOrder = {
  name: string;
  phone: string;
  address: string;
  email: string;
  products: TOrderProduct[];
  totalPrice: number;
};
