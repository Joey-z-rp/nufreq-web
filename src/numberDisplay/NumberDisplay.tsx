import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import React, { Fragment, FunctionComponent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import RefreshIntervalSetting from './FreshIntervalSetting';
import InteractionSection from './InteractionSection/components/InteractionSection';
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
            <div>Frequency here</div>
          </Grid>
          {!isQuiting && (
            <Grid item md={6} xs={12}>
              <InteractionSection quit={() => setIsQuiting(true)} />
            </Grid>
          )}
        </Grid>
      </Container>
      <RefreshIntervalSetting />
    </Fragment>
  );
};

export default NumberDisplay;
