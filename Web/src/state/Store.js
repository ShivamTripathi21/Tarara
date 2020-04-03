import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';
import {reducers, sagas} from './Elements';
import createSagaMiddleware from 'redux-saga';

export default function configureStore(initialState){
    const sagaMW = createSagaMiddleware();
    const MW = [sagaMW];

    if(process.env.NODE_ENV !== 'production'){
        MW.push(logger)
    }

    const composeDevTool = composeWithDevTools({});
    const store = createStore(
        reducers,
        initialState,
        composeDevTool(
            applyMiddleware(
                ...MW,
            ),
        ),
    );

    let sagaTask = sagaMW.run(sagas);

    if(module.hot){
        module.hot.accept('./Elements', () => {
            const {reducers, sagas} = require('./Elements');
            store.replaceReducer(reducers);
            sagaTask.cancel();
            sagaTask.done.then(() => {
                sagaTask = sagaMW.run(sagas);
            });
        });
    }
    return store;
}
