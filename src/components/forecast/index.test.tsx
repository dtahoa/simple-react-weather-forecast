import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Forecast from './index';
import { mockForecast } from '../../__mocks__/Weather.mock';

import { ForecastItem } from '../../types';

describe('<Forecast />', () => {
  let testProps: { forecast: ForecastItem[] };

  beforeEach(() => {
    testProps = {
      forecast: mockForecast,
    };
  });

  test('renders the weekly forecast for the specified location', async () => {
    render(<Forecast forecast={testProps.forecast} />);

    await screen.findByText('Wednesday');

    expect(screen.getByText('Wednesday')).toBeInTheDocument();
    expect(screen.getByText('Thursday')).toBeInTheDocument();
    expect(screen.getByText('Friday')).toBeInTheDocument();
    expect(screen.getByText('Saturday')).toBeInTheDocument();
    expect(screen.getByText('Sunday')).toBeInTheDocument();
    expect(screen.getAllByText('14° /').length).toBe(2);
    expect(screen.getAllByText('14°').length).toBe(2);
    expect(screen.getAllByText('15° /').length).toBe(3);
    expect(screen.getAllByText('15°').length).toBe(3);
  });
});
