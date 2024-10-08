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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const semdResponse_1 = __importDefault(require("../../utils/semdResponse"));
const http_status_1 = __importDefault(require("http-status"));
const product_service_1 = require("./product.service");
const createProduct = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_service_1.ProductServices.createProduct(req.body);
    (0, semdResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Product is created successfully",
        data: result,
    });
}));
const getAllProducts = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const queryParams = req.query;
    const result = yield product_service_1.ProductServices.getAllProducts(queryParams);
    (0, semdResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Services retrieved successfully",
        data: result,
    });
}));
const getSingleProduct = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield product_service_1.ProductServices.getSingleProduct(id);
    (0, semdResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Single product retrieve successfully",
        data: result,
    });
}));
const updateSingleProduct = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = req.body;
    const result = yield product_service_1.ProductServices.updateSingleProduct(id, product);
    (0, semdResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Product is updated  successfully",
        data: result,
    });
}));
const deleteSingleProduct = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield product_service_1.ProductServices.deleteSingleProduct(id);
    (0, semdResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Product deleted successfully",
        data: result,
    });
}));
exports.ProductController = {
    createProduct,
    getAllProducts,
    updateSingleProduct,
    getSingleProduct,
    deleteSingleProduct,
};
