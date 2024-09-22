/* eslint-disable @typescript-eslint/no-unused-vars */
import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/semdResponse";
import httpStatus from "http-status";
import { OrderServices } from "./orders.service";

const createOrder: RequestHandler = catchAsync(async (req, res, next) => {
  const result = await OrderServices.createOrder(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Order is created successfully",
    data: result,
  });
});

export const OrderController = {
  createOrder,
};
