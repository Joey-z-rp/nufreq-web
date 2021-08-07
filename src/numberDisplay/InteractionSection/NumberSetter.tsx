import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import React, {
  ChangeEvent,
  FunctionComponent,
  KeyboardEvent,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setNumber as setNumberAction } from '../numberDisplayActions';
import { State } from '../../redux/storeTypes';

const NumberSetterRoot = styled.div`
  margin-bottom: 1.5rem;
`;

const InputWrapper = styled.div`
  margin-bottom: 1rem;
`;

const NumberSetter: FunctionComponent = () => {
  const dispatch = useDispatch();
  const isSettingNumber = useSelector(
    (state: State) => state.numberDisplay.isSettingNumber
  );
  const [numberInput, setNumberInput] = useState('');

  const onNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNumberInput(event.target.value);
  };
  const setNumber = () => {
    if (!!numberInput) {
      dispatch(setNumberAction(Number(numberInput)));
    }
  };
  const onKeyPress = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      setNumber();
    }
  };

  return (
    <NumberSetterRoot>
      <p>Please enter your number:</p>
      <InputWrapper>
        <Input
          disabled={isSettingNumber}
          onChange={onNumberChange}
          onKeyPress={onKeyPress}
          type="number"
          value={numberInput}
        />
      </InputWrapper>
      <Button
        color="primary"
        disabled={isSettingNumber}
        onClick={setNumber}
        variant="contained"
      >
        Set
      </Button>
    </NumberSetterRoot>
  );
};

export default NumberSetter;
