import {all, put, takeLatest} from 'redux-saga/effects';
import {ScheduleTypes} from 'store/schedule';
import {IResponse} from 'types';
import axiosClient from 'utils/axios';
import {GETWAY} from 'utils/constants';

/*============================================*/
function* getScheduleRequest(action) {
  try {
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );

    if (rs.result.success) {
      yield put({
        type: ScheduleTypes.GET_SCHEDULE_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({type: ScheduleTypes.GET_SCHEDULE_FAILURE, error: rs.result});
    }
    action.callback?.(rs.result);
  } catch (error) {
    yield put({type: ScheduleTypes.GET_SCHEDULE_FAILURE, error});
  }
}
function* watchGetSchedule() {
  yield takeLatest(ScheduleTypes.GET_SCHEDULE_REQUEST, getScheduleRequest);
}

/*============================================*/
function* getOneScheduleRequest(action) {
  try {
    console.log('action.getOneSchedule', action.params);
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    console.log('rs.getOneSchedule', rs);

    if (rs.result.success) {
      yield put({
        type: ScheduleTypes.GET_DETAIL_SCHEDULE_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: ScheduleTypes.GET_DETAIL_SCHEDULE_FAILURE,
        error: rs.result,
      });
    }
    action.callback?.(rs.result);
  } catch (error) {
    yield put({type: ScheduleTypes.GET_DETAIL_SCHEDULE_FAILURE, error});
  }
}
function* watchGetOneSchedule() {
  yield takeLatest(
    ScheduleTypes.GET_DETAIL_SCHEDULE_REQUEST,
    getOneScheduleRequest,
  );
}
/*============================================*/
function* updateStateScheduleRequest(action) {
  try {
    console.log('action.upStateSchedule', action.params);
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    console.log('rs.upStateSchedule', rs);

    // if (rs.result.success) {
    //   yield put({
    //     type: ScheduleTypes.GET_SCHEDULE_SUCCESS,
    //     payload: rs.result.data,
    //   });
    // } else {
    //   yield put({type: ScheduleTypes.GET_SCHEDULE_FAILURE, error: rs.result});
    // }
    action.callback?.(rs.result);
  } catch (error) {
    action.callback?.({success: false});
    // yield put({type: ScheduleTypes.GET_SCHEDULE_FAILURE, error});
  }
}
function* watchUpdateStateSchedule() {
  yield takeLatest(
    ScheduleTypes.UPDATE_STATE_SCHEDULE_REQUEST,
    updateStateScheduleRequest,
  );
}
/*============================================*/
function* delScheduleRequest(action) {
  try {
    console.log('action.delSchedule', action.params);
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    console.log('rs.delSchedule', rs);
    action.callback?.(rs.result);
  } catch (error) {
    action.callback?.({success: false});
  }
}
function* watchDelSchedule() {
  yield takeLatest(ScheduleTypes.DELETE_SCHEDULE_REQUEST, delScheduleRequest);
}
/*============================================*/

function* getTypeCalendarRequest(action) {
  try {
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    if (rs.result.success) {
      yield put({
        type: ScheduleTypes.GET_TYPE_CALENDAR_SUCCESS,
        payload: rs.result.data,
      });
    }
    action.callback?.(rs.result);
  } catch (error) {
    action.callback?.({success: false});
  }
}
function* watchGetTypeCalendar() {
  yield takeLatest(
    ScheduleTypes.GET_TYPE_CALENDAR_REQUEST,
    getTypeCalendarRequest,
  );
}
/*============================================*/

function* addScheduleRequest(action) {
  try {
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    if (rs.result.success) {
      yield put({
        type: ScheduleTypes.ADD_SCHEDULE_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: ScheduleTypes.ADD_SCHEDULE_FAILURE,
        error: rs.result,
      });
    }
    action.callback?.(rs.result);
  } catch (error) {
    action.callback?.({success: false});
    yield put({
      type: ScheduleTypes.ADD_SCHEDULE_FAILURE,
      error,
    });
  }
}
function* watchAddSchedule() {
  yield takeLatest(ScheduleTypes.ADD_SCHEDULE_REQUEST, addScheduleRequest);
}
/*============================================*/

function* updateScheduleRequest(action) {
  try {
    console.log('action.updateSchedule', action.params);
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    console.log('rs.updateSchedule', rs, action);
    // if (rs.result.success) {
    //   yield put({
    //     type: ScheduleTypes.UPDATE_SCHEDULE_SUCCESS,
    //     payload: rs.result.data,
    //   });
    // } else {
    //   yield put({
    //     type: ScheduleTypes.UPDATE_SCHEDULE_FAILURE,
    //     error: rs.result,
    //   });
    // }
    action.callback?.(rs.result);
  } catch (error) {
    action.callback?.({success: false});
    // yield put({
    //   type: ScheduleTypes.UPDATE_SCHEDULE_FAILURE,
    //   error,
    // });
  }
}
function* watchUpdateSchedule() {
  yield takeLatest(
    ScheduleTypes.UPDATE_SCHEDULE_REQUEST,
    updateScheduleRequest,
  );
}
/*============================================*/

function* getBookingTimeRequest(action) {
  try {
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );

    if (rs.result.success) {
      yield put({
        type: ScheduleTypes.GET_BOOKING_TIME_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: ScheduleTypes.GET_BOOKING_TIME_FAILURE,
        error: rs.result,
      });
    }
    action.callback?.(rs.result);
  } catch (error) {
    yield put({type: ScheduleTypes.GET_BOOKING_TIME_FAILURE, error});
  }
}
function* watchBookingTime() {
  yield takeLatest(
    ScheduleTypes.GET_BOOKING_TIME_REQUEST,
    getBookingTimeRequest,
  );
}

/*============================================*/

export default function* scheduleSagas() {
  yield all([
    watchGetSchedule(),
    watchGetOneSchedule(),
    watchUpdateStateSchedule(),
    watchDelSchedule(),
    watchGetTypeCalendar(),
    watchAddSchedule(),
    watchUpdateSchedule(),
    watchBookingTime(),
  ]);
}
