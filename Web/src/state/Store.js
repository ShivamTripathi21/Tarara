import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import logger from 'redux-logger'
import {reducers, sagas} from './ducks'

export default function configureStore(initialState){
    const sagaMW = createSagaMiddleware();
    const MW = [sagaMiddleware];

    if(process.env.NODE_ENV !== 'production'){
        MW.push(logger)
    }

    const composeDevTool = composeWithDevTools({});
    const store = createStore(
        reducers,
        initialState,
        composeDevTool(
            applyMiddleware(
                ...middlewares,
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
                sagaTask = sagaMiddleware.run(sagas);
            });
        });
    }
    return store;
}
