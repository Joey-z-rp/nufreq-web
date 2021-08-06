import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import React, { Fragment, FunctionComponent } from 'react';

const NumberDisplay: FunctionComponent = () => {
  return (
    <Fragment>
      <Container>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <div>Frequency here</div>
          </Grid>
          <Grid item md={6} xs={12}>
            <div>Actions here</div>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default NumberDisplay;
