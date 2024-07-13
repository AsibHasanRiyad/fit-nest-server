/* eslint-disable @typescript-eslint/no-explicit-any */
import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const createProduct = async (payload: TProduct) => {
  const result = await ProductModel.create(payload);
  return result;
};

const getAllProducts = async (filterOptions: {
  searchTerm: any;
  categories: any;
  minPrice: any;
  maxPrice: any;
  sortBy: any;
  sortOrder: any;
}) => {
  const { searchTerm, categories, minPrice, maxPrice, sortBy, sortOrder } =
    filterOptions;
  const query: { [key: string]: any } = {};

  // search by product name
  if (searchTerm) {
    query.name = { $regex: searchTerm, $options: "i" };
  }
  // filter by category
  if (categories && categories.length > 0) {
    query.category = { $in: categories };
  }
  // filter by price range
  if (minPrice !== null || maxPrice !== null) {
    query.price = {};
    if (minPrice !== null) {
      query.price.$gte = minPrice;
    }
    if (maxPrice !== null) {
      query.price.$lte = maxPrice;
    }
  }
  // Sorting
  const sortOptions: { [key: string]: 1 | -1 } = {};
  if (sortBy) {
    sortOptions[sortBy] = sortOrder === "desc" ? -1 : 1;
  }
  const result = await ProductModel.find(query).sort(sortOptions);
  return result;
};
const getSingleProduct = async (id: string) => {
  const result = await ProductModel.findById(id);
  return result;
};

const updateSingleProduct = async (id: string, payload: Partial<TProduct>) => {
  const result = await ProductModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};
const deleteSingleProduct = async (id: string) => {
  const result = await ProductModel.findByIdAndDelete(id);
  return result;
};
export const ProductServices = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
};
