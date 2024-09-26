"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const product_validation_1 = require("./product.validation");
const router = express_1.default.Router();
router.post("/create-product", (0, validateRequest_1.default)(product_validation_1.ProductValidation.createProductValidationSchema), product_controller_1.ProductController.createProduct);
router.get("/", product_controller_1.ProductController.getAllProducts);
router.get("/:id", product_controller_1.ProductController.getSingleProduct);
router.delete("/:id", product_controller_1.ProductController.deleteSingleProduct);
router.patch("/:id", (0, validateRequest_1.default)(product_validation_1.ProductValidation.updateProductValidationSchema), product_controller_1.ProductController.updateSingleProduct);
exports.productRoutes = router;
