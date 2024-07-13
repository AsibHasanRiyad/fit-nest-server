/* eslint-disable @typescript-eslint/no-unused-vars */
import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/semdResponse";
import httpStatus from "http-status";
import { ProductServices } from "./product.service";

const createProduct: RequestHandler = catchAsync(async (req, res, next) => {
  const result = await ProductServices.createProduct(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product is created successfully",
    data: result,
  });
});

export const ProductController = {
  createProduct,
};
