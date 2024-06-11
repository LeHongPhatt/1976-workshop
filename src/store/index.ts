/** @format */

import {combineReducers} from 'redux';
import notify from './notify/Reducer';
import user from './user/Reducer';
import address from './address/Reducer';
import news from './news/Reducer';
import account from './account/Reducer';
import home from './home/Reducer';
import cart from './cart/Reducer';
import search from './search/Reducer';
import product from './product/Reducer';
import notification from './notification/Reducer';
import cartOrder from './cartOrder/Reducer';
import historyOrder from './historyOrder/Reducer';
export default combineReducers({
  user,
  notify,
  address,
  news,
  account,
  home,
  cart,
  search,
  product,
  notification,
  cartOrder,
  historyOrder,
});
