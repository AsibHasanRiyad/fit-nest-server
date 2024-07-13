import { Router } from "express";
import { ProductController } from "../modules/product/product.controller";

const router = Router();
const moduleRoutes = [
  {
    path: "create-product",
    route: ProductController.createProduct,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
