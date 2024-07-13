import { z } from "zod";

const createProductValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    price: z.number().positive().min(1),
    stockQuantity: z.number().positive().min(0),
    description: z
      .string()
      .min(10, "Description must be at least 10 characters"),
    image: z.string().url({ message: "Invalid image URL" }),
    category: z.string(),
  }),
});
const updateProductValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    price: z.number().positive().min(1).optional(),
    stockQuantity: z.number().positive().min(0).optional(),
    description: z
      .string()
      .min(10, "Description must be at least 10 characters")
      .optional(),
    image: z.string().url({ message: "Invalid image URL" }).optional(),
    category: z.string().optional(),
  }),
});

export const ProductValidation = {
  createProductValidationSchema,
  updateProductValidationSchema,
};
