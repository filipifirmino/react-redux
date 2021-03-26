import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../Reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const storeConfig = () => {
    return createStore(
        rootReducer,
        composeEnhancer(applyMiddleware(thunk)),
    );
}

export default storeConfig;