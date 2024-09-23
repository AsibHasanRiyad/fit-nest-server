import { ProductModel } from "../product/product.model";
import { TOrder } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrder = async (payload: TOrder) => {
  for (const item of payload.products) {
    const product = await ProductModel.findById(item.productId);
    if (!product) {
      throw new Error(`Product not found.`);
    }
    if (item.quantity > product.stockQuantity) {
      throw new Error(
        `Quantity for product ${product.name} exceeds available stock.`
      );
    }
  }

  // Create the order
  const order = await OrderModel.create(payload);

  // Update the stock quantity of each product
  for (const item of payload.products) {
    await ProductModel.findByIdAndUpdate(item.productId, {
      $inc: { stockQuantity: -item.quantity },
    });
  }

  return order;
};

export const OrderServices = {
  createOrder,
};
