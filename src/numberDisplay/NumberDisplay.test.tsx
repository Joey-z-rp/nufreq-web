import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import NumberDisplay from './NumberDisplay';
import { FETCH_FREQUENCY_ENDPOINT } from './numberDisplayActions';
import { render } from '../test/testUtils';

jest.mock('cross-fetch', () => require('fetch-mock-jest').sandbox());
const fetchMock = require('cross-fetch');
const response = {
  data: {
    frequency: {
      '5': 10,
    },
  },
  message: '',
};
fetchMock.get(FETCH_FREQUENCY_ENDPOINT, response);

describe('When the user quits', () => {
  const setup = () => {
    const initialState = {
      numberDisplay: {
        refreshInterval: 15,
      },
    };

    const rendered = render(<NumberDisplay />, initialState);
    const quitButton = screen.getByRole('button', { name: 'Quit' });
    userEvent.click(quitButton);

    return rendered;
  };

  it('should display the final number frequency', async () => {
    setup();

    await waitFor(() => {
      expect(screen.getByTestId('1-number')).toHaveTextContent('5');
      expect(screen.getByTestId('1-frequency')).toHaveTextContent('10');
    });
  });

  it('should display the farewell message', async () => {
    setup();

    await waitFor(() =>
      expect(
        screen.getByText(
          'Thanks for using Nufreq. You can close the window now.'
        )
      ).toBeVisible()
    );
  });
});
