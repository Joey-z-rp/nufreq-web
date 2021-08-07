import {
  CLEAR_NOTIFICATION,
  FETCH_FREQUENCY,
  FETCH_FREQUENCY_FAILURE,
  FETCH_FREQUENCY_SUCCESS,
  SET_NUMBER,
  SET_NUMBER_FAILURE,
  SET_NUMBER_SUCCESS,
  SET_REFRESH_INTERVAL,
} from './numberDisplayActions';
import { StandardAction } from '../redux/storeTypes';

type NumberFrequency = {
  frequency: number;
  number: string;
}[];

export type NumberDisplayState = {
  isFetchingFrequency: boolean;
  isSettingNumber: boolean;
  notificationMessage: string;
  numberFrequency: NumberFrequency;
  refreshInterval: number | undefined;
  sessionId: string;
};

const initialState: NumberDisplayState = {
  isFetchingFrequency: false,
  isSettingNumber: false,
  notificationMessage: '',
  numberFrequency: [],
  refreshInterval: undefined,
  sessionId: '',
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
        notificationMessage: 'Fail to load number frequency',
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
        notificationMessage: action.payload!.isFib ? 'FIB' : 'Success',
        sessionId: action.payload!.sessionId,
      };

    case SET_NUMBER_FAILURE:
      return {
        ...state,
        notificationMessage: 'Fail to set number',
        isSettingNumber: false,
      };

    case CLEAR_NOTIFICATION:
      return {
        ...state,
        notificationMessage: '',
      };

    default:
      return state;
  }
};

export default numberDisplayReducer;
