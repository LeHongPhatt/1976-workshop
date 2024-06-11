import {all} from 'redux-saga/effects';
import userSagas from './user/Sagas';
import addressSagas from './address/Sagas';
import newsSagas from './news/Sagas';
import accountSagas from './account/Sagas';
import homeSagas from './home/Sagas';
import cartSagas from './cart/Sagas';
import searchSagas from './search/Sagas';
import productSagas from './product/Sagas';
import notificationSagas from './notification/Sagas';
import cartOrderSagas from './cartOrder/Sagas';
import historyOrderSagas from './historyOrder/Sagas';
export default function* rootSaga() {
  yield all([
    userSagas(),
    addressSagas(),
    newsSagas(),
    accountSagas(),
    homeSagas(),
    cartSagas(),
    searchSagas(),
    productSagas(),
    notificationSagas(),
    cartOrderSagas(),
    historyOrderSagas(),
  ]);
}
