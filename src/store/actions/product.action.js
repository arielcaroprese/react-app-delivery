/* eslint-disable prettier/prettier */
import { productTypes } from '../types/product.types';

const { SELECT_PRODUCT, FILTERED_PRODUCTS } = productTypes;

export const selectProduct = (productId) => ({
    type: SELECT_PRODUCT,
    productId
});

export const filteredProducts = (id) => ({
    type: FILTERED_PRODUCTS,
    categoryId: id,
});
