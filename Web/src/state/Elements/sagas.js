import {all} from 'redux-saga/effects';
import {combinedSaga as PrimaryDashboardSaga} from './PrimaryDashboard/sagas'

export default function* rootSaga(){
    yield all([
        PrimaryDashboardSaga()
    ]);
}
