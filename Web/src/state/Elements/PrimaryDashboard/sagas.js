import{
    takeEvery,
    all,
    call,
    put
} from 'redux-saga/effects';

import * as Api from '../../../api/Api';

import {    
    GET_NEARBY_SHOWS_LIST_SAGA
}from './types';

function* getNearbyShows(payload){
    try{
        let newPayload;
        const Data = yield call(Api.callGet, `node js url`, []);
        Data.array.forEach(e => {
            e.City = e.City == null ? undefined : new String(e.City)
        });
        newPayload = Data;

        yield put({
            type: GET_NEARBY_SHOWS_LIST_SAGA,
            payload: newPayload
        });
    }
    catch(e){
        yield put({
            type: GET_NEARBY_SHOWS_LIST_SAGA,
            payload: newPayload
        });
    }
}
function* watchGetNearbyShows(){
    yeild takeEvery(GET_NEARBY_SHOWS_LIST_SAGA, getNearbyShows)
}

export const Exports = {
    getNearbyShows
}

export function* combinedSaga(){
    yeild all([
        watchGetNearbyShows()
    ]);
}