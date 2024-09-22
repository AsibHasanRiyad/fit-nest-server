import { Types } from "mongoose";

export type TUser = {
  name: string;
  phone: string;
  address: string;
  email: string;
};

export type TOrderProduct = {
  productId: Types.ObjectId;
  quantity: number;
};

export type TOrder = {
  name: string;
  user: TUser;
  products: TOrderProduct[];
  totalPrice: number;
};
