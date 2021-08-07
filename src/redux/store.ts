import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import { State } from './storeTypes';

const middlewareEnhancer = applyMiddleware(thunkMiddleware);

export const configureStore = (preloadedState?: State) =>
  createStore(rootReducer, preloadedState, middlewareEnhancer);

const store = configureStore();

export default store;
