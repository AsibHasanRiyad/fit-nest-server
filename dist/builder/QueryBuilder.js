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
Object.defineProperty(exports, "__esModule", { value: true });
class QueryBuilder {
    constructor(modelQuery, query) {
        this.modelQuery = modelQuery;
        this.query = query;
    }
    search(searchableFields) {
        const searchTerm = this.query.searchTerm;
        if (searchTerm) {
            this.modelQuery = this.modelQuery.find({
                $or: searchableFields.map((field) => ({
                    [field]: { $regex: searchTerm, $options: "i" },
                })),
            });
        }
        return this;
    }
    filter() {
        const queryObj = Object.assign({}, this.query);
        const excludeFields = [
            "searchTerm",
            "sort",
            "limit",
            "page",
            "fields",
            "minPrice",
            "maxPrice",
        ];
        excludeFields.forEach((field) => delete queryObj[field]);
        // Handle price range filtering
        if (this.query.minPrice || this.query.maxPrice) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const priceFilter = {};
            if (this.query.minPrice)
                priceFilter.$gte = Number(this.query.minPrice);
            if (this.query.maxPrice)
                priceFilter.$lte = Number(this.query.maxPrice);
            // Apply the price filter
            this.modelQuery = this.modelQuery.find(Object.assign(Object.assign({}, queryObj), { price: priceFilter }));
        }
        else {
            this.modelQuery = this.modelQuery.find(queryObj);
        }
        return this;
    }
    sort() {
        const sortField = this.query.sort || "-createdAt";
        const sortOrder = sortField.startsWith("-") ? -1 : 1;
        const cleanSortField = sortField.replace(/^-/, "");
        this.modelQuery = this.modelQuery.sort({ [cleanSortField]: sortOrder });
        return this;
    }
    paginate() {
        const page = Number(this.query.page) || 1;
        const limit = Number(this.query.limit) || 10;
        const skip = (page - 1) * limit;
        this.modelQuery = this.modelQuery.skip(skip).limit(limit);
        return this;
    }
    fields() {
        var _a, _b;
        const fields = ((_b = (_a = this.query.fields) === null || _a === void 0 ? void 0 : _a.split(",")) === null || _b === void 0 ? void 0 : _b.join(" ")) || "-__v";
        this.modelQuery = this.modelQuery.select(fields);
        return this;
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const totalData = yield this.countTotal();
            const results = yield this.modelQuery.exec();
            return {
                results,
                pagination: totalData,
            };
        });
    }
    countTotal() {
        return __awaiter(this, void 0, void 0, function* () {
            const totalQueries = this.modelQuery.getFilter();
            const total = yield this.modelQuery.model
                .countDocuments(totalQueries)
                .exec();
            const page = Number(this.query.page) || 1;
            const limit = Number(this.query.limit) || 10;
            const totalPage = Math.ceil(total / limit);
            return {
                page,
                limit,
                total,
                totalPage,
            };
        });
    }
}
exports.default = QueryBuilder;
