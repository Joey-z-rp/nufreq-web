import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '@material-ui/core/Input';
import React, { ChangeEvent, FunctionComponent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRefreshInterval as setRefreshIntervalAction } from './numberDisplayActions';
import { State } from '../redux/storeTypes';

const RefreshIntervalSetting: FunctionComponent = () => {
  const dispatch = useDispatch();
  const refreshInterval = useSelector(
    (state: State) => state.numberDisplay.refreshInterval
  );
  const [refreshIntervalInput, setRefreshIntervalInput] = useState('');

  const onRefreshIntervalChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRefreshIntervalInput(event.target.value);
  };

  const refreshIntervalInputNum = Number(refreshIntervalInput);
  const isValidInput =
    !isNaN(refreshIntervalInputNum) && refreshIntervalInputNum > 3;
    
  const setRefreshInterval = () => {
    if (isValidInput) {
      dispatch(setRefreshIntervalAction(refreshIntervalInputNum));
    }
  };

  return (
    <Dialog open={!refreshInterval}>
      <DialogTitle>Set Refresh Interval</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please enter the amount of time in seconds between emitting numbers
          and their frequency. It must be greater than 3s.
        </DialogContentText>
        <Input
          autoFocus
          error={!!refreshIntervalInput && !isValidInput}
          fullWidth
          onChange={onRefreshIntervalChange}
          type="number"
          value={refreshIntervalInput}
        />
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={setRefreshInterval}>
          Set
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RefreshIntervalSetting;
