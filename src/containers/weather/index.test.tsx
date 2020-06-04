import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WeatherContainer from './index';
import { mockWeatherData, mockForecastData } from '../../__mocks__/Weather.mock';

jest.mock('../../hooks', () => {
  return jest.fn(searchCity => searchCity);
});

jest.mock('moment', () => () => ({
  format: () => 'Thu, 5:24 PM'
}));

describe('<WeatherContainer />', () => {
  afterEach(() => jest.restoreAllMocks());

  test('fetches and then renders the current weather', async () => {
    jest
      .spyOn(window, 'fetch')
      .mockImplementationOnce(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockWeatherData)
        } as any) // eslint-disable-line
      )
      .mockImplementationOnce(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockForecastData)
        } as any) // eslint-disable-line
      );

    render(<WeatherContainer />);

    const cityNameEl = await screen.findByText('Eldoret KE');
    expect(cityNameEl).toBeInTheDocument();
    expect(screen.getByText('Eldoret KE')).toBeInTheDocument();
    expect(screen.findAllByText('Thu, 5:24 PM')).not.toBeNull();
    expect(screen.getByText('20°C')).toBeInTheDocument();
    expect(screen.getByText('Broken Clouds')).toBeInTheDocument();
    expect(window.fetch).toHaveBeenCalledTimes(2);
  });

  test('renders loading spinner & an error if there were a problem getting weather data', async () => {
    const mockErrorResponse = {
      ok: false,
      status: 500,
      statusText: 'Internal Server Error',
      message: 'An internal server error occurred'
    };

    jest
      .spyOn(window, 'fetch')
      .mockImplementation(() => Promise.reject(mockErrorResponse));

    render(<WeatherContainer />);

    // loading spinner
    await screen.findByRole('progressbar');
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
    expect(screen.getByText(mockErrorResponse.message)).toBeInTheDocument();
  });
});
