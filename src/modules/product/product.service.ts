import QueryBuilder from "../../builder/QueryBuilder";
import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const createProduct = async (payload: TProduct) => {
  const result = await ProductModel.create(payload);
  return result;
};

const getAllProducts = async (queryParams: Record<string, unknown>) => {
  const serviceQuery = new QueryBuilder(ProductModel.find(), queryParams);
  serviceQuery.search(["name"]).filter().sort().paginate().fields();
  const result = await serviceQuery.modelQuery;
  const meta = await serviceQuery.countTotal();
  return { result, meta };
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
