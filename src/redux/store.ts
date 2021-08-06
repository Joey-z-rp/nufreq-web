import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

const middlewareEnhancer = applyMiddleware(thunkMiddleware);

const store = createStore(rootReducer, undefined, middlewareEnhancer);

export default store;