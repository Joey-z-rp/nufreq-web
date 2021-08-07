import { Dispatch } from 'redux';
import { GetFrequencyResponse, SetNumberResponse } from './numberDisplayTypes';
import { ReduxGetState } from '../redux/storeTypes';
import { callApi } from '../utils/callApi';

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

export const CLEAR_NOTIFICATION = 'CLEAR_NOTIFICATION';

const getSessionHeader = (sessionId: string) => ({
  'nufreq-session-id': sessionId,
});

export const fetchFrequency =
  () => (dispatch: Dispatch, getState: ReduxGetState) => {
    dispatch({ type: FETCH_FREQUENCY });

    const sessionId = getState().numberDisplay.sessionId;
    const requestInit: RequestInit = {
      headers: getSessionHeader(sessionId),
    };

    return callApi<GetFrequencyResponse>(FETCH_FREQUENCY_ENDPOINT, requestInit)
      .then(({ frequency }) => {
        const numberFrequency = Object.keys(frequency)
          .map((number) => ({
            number,
            frequency: frequency[number],
          }))
          .sort((a, b) => b.frequency - a.frequency);

        dispatch({
          type: FETCH_FREQUENCY_SUCCESS,
          payload: { numberFrequency },
        });
      })
      .catch(() => dispatch({ type: FETCH_FREQUENCY_FAILURE }));
  };

export const setNumber =
  (number: number) => (dispatch: Dispatch, getState: ReduxGetState) => {
    dispatch({ type: SET_NUMBER });

    const sessionId = getState().numberDisplay.sessionId;
    const requestInit: RequestInit = {
      body: JSON.stringify({ number }),
      headers: {
        ...getSessionHeader(sessionId),
        'Content-Type': 'application/json',
      },
      method: 'POST',
    };

    return callApi<SetNumberResponse>(SET_NUMBER_ENDPOINT, requestInit)
      .then((data) => {
        dispatch({
          type: SET_NUMBER_SUCCESS,
          payload: data,
        });
      })
      .catch(() => dispatch({ type: SET_NUMBER_FAILURE }));
  };

export const setRefreshInterval = (refreshInterval: number) => ({
  type: SET_REFRESH_INTERVAL,
  payload: { refreshInterval },
});

export const clearNotification = () => ({
  type: CLEAR_NOTIFICATION,
});
