import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchFrequency } from '../../numberDisplayActions';

const RefreshTimerRoot = styled.div`
  margin-bottom: 1rem;
`;

const Timer = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  font-size: 2rem;
  margin: 1rem 0;
`;

const ButtonWrapper = styled.span`
  margin-right: 1rem;
`;

type RefreshTimerProps = {
  refreshInterval: number;
};

const RefreshTimer: FunctionComponent<RefreshTimerProps> = ({
  refreshInterval,
}) => {
  const dispatch = useDispatch();
  const [remainingTime, setRemainingTime] = useState<number>(refreshInterval);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timerRef: NodeJS.Timeout;
    const tick = (remainingTime: number) =>
      remainingTime === 0 ? refreshInterval : remainingTime - 1;

    if (!isPaused) {
      timerRef = setInterval(() => setRemainingTime(tick), 1000);
    }

    return () => clearInterval(timerRef);
  }, [isPaused, refreshInterval]);

  useEffect(() => {
    if (remainingTime === 0) {
      dispatch(fetchFrequency());
    }
  }, [dispatch, remainingTime]);

  return (
    <RefreshTimerRoot>
      <span>The frequency stats will refresh in:</span>
      <Timer>
        <span data-testid="countdown-timer">{remainingTime}</span>
      </Timer>
      <ButtonWrapper>
        <Button
          disabled={isPaused}
          onClick={() => setIsPaused(true)}
          variant="contained"
        >
          Halt
        </Button>
      </ButtonWrapper>
      <Button
        disabled={!isPaused}
        onClick={() => setIsPaused(false)}
        variant="contained"
      >
        Resume
      </Button>
    </RefreshTimerRoot>
  );
};

export default RefreshTimer;
