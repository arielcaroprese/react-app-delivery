/* eslint-disable prettier/prettier */
import { createStore, combineReducers } from 'redux';
import categoryReducer from './reducers/category.reducer';
import productReducer from './reducers/product.reducer';

const rootReducer = combineReducers({
    categories: categoryReducer,
    products: productReducer,
});

export default createStore(rootReducer);
