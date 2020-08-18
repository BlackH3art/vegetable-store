import { createStore } from 'redux';
import { ShopReducer } from './ShopReducer';

export const VegetableStoreDataStore = createStore(ShopReducer);