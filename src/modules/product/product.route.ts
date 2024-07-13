import express from "express";
import { ProductController } from "./product.controller";
import validateRequest from "../../middlewares/validateRequest";
import { ProductValidation } from "./product.validation";
const router = express.Router();

router.post(
  "/create-product",
  validateRequest(ProductValidation.createProductValidationSchema),
  ProductController.createProduct
);
router.get("/", ProductController.getAllProducts);
router.get("/:id", ProductController.getSingleProduct);
router.delete("/:id", ProductController.deleteSingleProduct);
router.patch(
  "/:id",
  validateRequest(ProductValidation.updateProductValidationSchema),
  ProductController.updateSingleProduct
);

export const productRoutes = router;
