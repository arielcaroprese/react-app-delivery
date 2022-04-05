/* eslint-disable prettier/prettier */
import { PRODUCTS } from '../../constants/products';

const initialState = {
    categories: PRODUCTS,
    filteredProducts: [],
    selectedCategory: null,
};

const productReducer = (state = initialState, action) => {
    return state;
};

export default productReducer;

