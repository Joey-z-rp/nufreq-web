import { render as rtlRender } from '@testing-library/react';
import merge from 'lodash/merge';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from 'redux';
import rootReducer from '../redux/reducers';
import { configureStore } from '../redux/store';
import { State } from '../redux/storeTypes';

const buildTestState = (stateOverrides: DeepPartial<State>) => {
  const initialState = rootReducer(undefined, { type: '' });

  return merge({}, initialState, stateOverrides) as State;
};

export const render = (
  ui: ReactNode,
  initialState: DeepPartial<State> = {}
) => {
  const store = configureStore(buildTestState(initialState));

  return rtlRender(<Provider store={store}>{ui}</Provider>);
};
