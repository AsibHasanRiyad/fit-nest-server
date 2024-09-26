"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderServices = void 0;
const product_model_1 = require("../product/product.model");
const order_model_1 = require("./order.model");
const createOrder = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    for (const item of payload.products) {
        const product = yield product_model_1.ProductModel.findById(item.productId);
        if (!product) {
            throw new Error(`Product not found.`);
        }
        if (item.quantity > product.stockQuantity) {
            throw new Error(`Quantity for product ${product.name} exceeds available stock.`);
        }
    }
    // Create the order
    const order = yield order_model_1.OrderModel.create(payload);
    // Update the stock quantity of each product
    for (const item of payload.products) {
        yield product_model_1.ProductModel.findByIdAndUpdate(item.productId, {
            $inc: { stockQuantity: -item.quantity },
        });
    }
    return order;
});
exports.OrderServices = {
    createOrder,
};
