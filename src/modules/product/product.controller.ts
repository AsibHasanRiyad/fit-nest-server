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

const getAllProducts = catchAsync(async (req, res) => {
  const queryParams = req.query;
  const result = await ProductServices.getAllProducts(queryParams);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Services retrieved successfully",
    data: result,
  });
});
const getSingleProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = await ProductServices.getSingleProduct(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single product retrieve successfully",
    data: result,
  });
});

const updateSingleProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const product = req.body;
  const result = await ProductServices.updateSingleProduct(id, product);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product is updated  successfully",
    data: result,
  });
});

const deleteSingleProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = await ProductServices.deleteSingleProduct(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product deleted successfully",
    data: result,
  });
});

export const ProductController = {
  createProduct,
  getAllProducts,
  updateSingleProduct,
  getSingleProduct,
  deleteSingleProduct,
};
