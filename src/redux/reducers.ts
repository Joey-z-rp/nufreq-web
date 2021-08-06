import { combineReducers } from 'redux';
import numberDisplayReducer from '../numberDisplay/numberDisplayReducer';

const rootReducer = combineReducers({
  numberDisplay: numberDisplayReducer,
});

export default rootReducer;
