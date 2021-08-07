import Snackbar from '@material-ui/core/Snackbar';
import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearNotification } from './numberDisplayActions';
import { State } from '../redux/storeTypes';

const Notification: FunctionComponent = () => {
  const dispatch = useDispatch();
  const notificationMessage = useSelector(
    (state: State) => state.numberDisplay.notificationMessage
  );

  const onNotificationHide = () => dispatch(clearNotification());

  return (
    <Snackbar
      anchorOrigin={{
        horizontal: 'right',
        vertical: 'top',
      }}
      autoHideDuration={2000}
      message={notificationMessage}
      onClose={onNotificationHide}
      open={!!notificationMessage}
    />
  );
};

export default Notification;
