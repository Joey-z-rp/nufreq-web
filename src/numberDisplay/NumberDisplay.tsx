import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import React, { Fragment, FunctionComponent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import FrequencyDisplay from './FrequencyDisplay';
import RefreshIntervalSetting from './FreshIntervalSetting';
import InteractionSection from './InteractionSection/components/InteractionSection';
import Notification from './Notification';
import { fetchFrequency } from './numberDisplayActions';

const NumberDisplay: FunctionComponent = () => {
  const dispatch = useDispatch();
  const [isQuiting, setIsQuiting] = useState(false);

  useEffect(() => {
    if (isQuiting) {
      dispatch(fetchFrequency());
    }
  }, [dispatch, isQuiting]);

  return (
    <Fragment>
      <Container>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <FrequencyDisplay />
            {isQuiting && (
              <p>Thanks for using Nufreq. You can close the window now.</p>
            )}
          </Grid>
          {!isQuiting && (
            <Grid item md={6} xs={12}>
              <InteractionSection quit={() => setIsQuiting(true)} />
            </Grid>
          )}
        </Grid>
      </Container>
      <RefreshIntervalSetting />
      <Notification />
    </Fragment>
  );
};

export default NumberDisplay;
