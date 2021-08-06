import { NumberDisplayState } from '../numberDisplay/numberDisplayReducer';

export type State = {
  numberDisplay: NumberDisplayState;
};

export type StandardAction = {
  type: string;
  payload?: {
    [k: string]: any;
  };
};

export type ReduxGetState = () => State;
