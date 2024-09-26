"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_route_1 = require("../modules/product/product.route");
const order_route_1 = require("../modules/orders/order.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/products",
        route: product_route_1.productRoutes,
    },
    {
        path: "/orders",
        route: order_route_1.orderRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
