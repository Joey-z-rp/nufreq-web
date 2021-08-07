import Button from '@material-ui/core/Button';
import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import RefreshTimer from './RefreshTimer';
import NumberSetter from '../NumberSetter';
import { State } from '../../../redux/storeTypes';

const InteractionSectionRoot = styled.div`
  display: flex;
  justify-content: center;
`;

type InteractionSectionProps = {
  quit: () => void;
};

const InteractionSection: FunctionComponent<InteractionSectionProps> = ({
  quit,
}) => {
  const refreshInterval = useSelector(
    (state: State) => state.numberDisplay.refreshInterval
  );

  return (
    <InteractionSectionRoot>
      <div>
        <NumberSetter />
        {refreshInterval && <RefreshTimer refreshInterval={refreshInterval} />}
        <Button onClick={quit} variant="contained">
          Quit
        </Button>
      </div>
    </InteractionSectionRoot>
  );
};

export default InteractionSection;
