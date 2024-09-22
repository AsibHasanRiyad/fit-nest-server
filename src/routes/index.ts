import { Router } from "express";
import { productRoutes } from "../modules/product/product.route";
import { orderRoutes } from "../modules/orders/order.route";

const router = Router();
const moduleRoutes = [
  {
    path: "/products",
    route: productRoutes,
  },
  {
    path: "/orders",
    route: orderRoutes,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
