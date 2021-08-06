import { Dispatch } from 'redux';
import { ReduxGetState } from '../redux/storeTypes';

const NUM_ROUTE = '/num';
export const FETCH_FREQUENCY_ENDPOINT = `${NUM_ROUTE}/get-frequency`;
export const SET_NUMBER_ENDPOINT = `${NUM_ROUTE}/set-number`;

export const FETCH_FREQUENCY = 'FETCH_FREQUENCY';
export const FETCH_FREQUENCY_SUCCESS = 'FETCH_FREQUENCY_SUCCESS';
export const FETCH_FREQUENCY_FAILURE = 'FETCH_FREQUENCY_FAILURE';

export const SET_NUMBER = 'SET_NUMBER';
export const SET_NUMBER_SUCCESS = 'SET_NUMBER_SUCCESS';
export const SET_NUMBER_FAILURE = 'SET_NUMBER_FAILURE';

export const SET_REFRESH_INTERVAL = 'SET_REFRESH_INTERVAL';

export const fetchFrequency =
  () => (dispatch: Dispatch, getState: ReduxGetState) => {
    dispatch({ type: FETCH_FREQUENCY });

    // todo: call api
    return;
  };

export const setNumber =
  (number: number) => (dispatch: Dispatch, getState: ReduxGetState) => {
    dispatch({ type: SET_NUMBER });

    // todo: call api
    return;
  };

export const setRefreshInterval = (refreshInterval: number) => ({
  type: SET_REFRESH_INTERVAL,
  payload: { refreshInterval },
});
