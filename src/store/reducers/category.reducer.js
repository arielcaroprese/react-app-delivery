/* eslint-disable prettier/prettier */
import { CATEGORIES } from '../../constants/categories';

const initialState = {
    categories: CATEGORIES,
    selectedCategory: null,
};

const categoryReducer = (state = initialState, action) => {
    return state;
};

export default categoryReducer;

