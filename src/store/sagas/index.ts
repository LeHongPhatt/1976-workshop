import {all} from 'redux-saga/effects';
import companySagas from './companySaga';
import contractSaga from './contractSaga';
import documentSaga from './documentSaga';
import homeSagas from './homeSagas';
import newsSagas from './newsSagas';
import plansSaga from './plansSaga';
import projectdetailSagas from './projectdetailSaga';
// import reservationSagas from './reservationSagas';
// import calendarSagas from './calendarSagas';
// import contractSagas from './contractSagas';
// import locationstoreSagas from './locationstoreSagas';
// import supportticketSagas from './supportticketSagas';
import scheduleSagas from './scheduleSagas';
import supportticketSagas from './supportticketSagas';
import surveySagas from './surveySagas';
import userSagas from './userSagas';

export default function* rootSaga() {
  yield all([
    userSagas(),
    homeSagas(),
    newsSagas(),
    surveySagas(),
    supportticketSagas(),
    projectdetailSagas(),
    // customerSagas(),
    // dealSagas(),
    // reservationSagas(),
    // projectSagas(),
    // calendarSagas(),
    // contractSagas(),
    // locationstoreSagas(),
    // supportticketSagas(),
    // dealSagas(),
    // projectSagas(),
    scheduleSagas(),
    contractSaga(),
    plansSaga(),
    documentSaga(),
    companySagas(),
  ]);
}
