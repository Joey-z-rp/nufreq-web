import {
  FETCH_FREQUENCY,
  FETCH_FREQUENCY_FAILURE,
  FETCH_FREQUENCY_SUCCESS,
  SET_NUMBER,
  SET_NUMBER_FAILURE,
  SET_NUMBER_SUCCESS,
  SET_REFRESH_INTERVAL,
} from './numberDisplayActions';
import { StandardAction } from '../redux/storeTypes';

export type NumberDisplayState = {
  isFetchingFrequency: boolean;
  isSettingNumber: boolean;
  numberFrequency: {}[]; // todo
  refreshInterval: number | undefined;
};

const initialState: NumberDisplayState = {
  isFetchingFrequency: false,
  isSettingNumber: false,
  numberFrequency: [],
  refreshInterval: undefined,
};

const numberDisplayReducer = (state = initialState, action: StandardAction) => {
  switch (action.type) {
    case SET_REFRESH_INTERVAL:
      return {
        ...state,
        refreshInterval: action.payload!.refreshInterval,
      };

    case FETCH_FREQUENCY:
      return {
        ...state,
        isFetchingFrequency: true,
      };

    case FETCH_FREQUENCY_SUCCESS:
      return {
        ...state,
        numberFrequency: action.payload!.numberFrequency,
        isFetchingFrequency: false,
      };

    case FETCH_FREQUENCY_FAILURE:
      return {
        ...state,
        isFetchingFrequency: false,
      };

    case SET_NUMBER:
      return {
        ...state,
        isSettingNumber: true,
      };

    case SET_NUMBER_SUCCESS:
      return {
        ...state,
        isSettingNumber: false,
      };

    case SET_NUMBER_FAILURE:
      return {
        ...state,
        isSettingNumber: false,
      };

    default:
      return state;
  }
};

export default numberDisplayReducer;
