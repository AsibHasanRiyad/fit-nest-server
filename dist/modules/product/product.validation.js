"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValidation = void 0;
const zod_1 = require("zod");
const createProductValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        price: zod_1.z.number().positive().min(1),
        stockQuantity: zod_1.z.number().positive().min(0),
        description: zod_1.z
            .string()
            .min(10, "Description must be at least 10 characters"),
        image: zod_1.z.string().url({ message: "Invalid image URL" }),
        category: zod_1.z.string(),
    }),
});
const updateProductValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        price: zod_1.z.number().positive().min(1).optional(),
        stockQuantity: zod_1.z.number().positive().min(0).optional(),
        description: zod_1.z
            .string()
            .min(10, "Description must be at least 10 characters")
            .optional(),
        image: zod_1.z.string().url({ message: "Invalid image URL" }).optional(),
        category: zod_1.z.string().optional(),
    }),
});
exports.ProductValidation = {
    createProductValidationSchema,
    updateProductValidationSchema,
};
