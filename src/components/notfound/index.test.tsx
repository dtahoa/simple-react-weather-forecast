import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PageNotFound from './index';

describe('<PageNotFound />', () => {
  test('PageNotFound renders without crashing', () => {
    const { container } = render(
      <Router>
        <PageNotFound />
      </Router>
    );

    expect(container).toBeDefined();
  });

  test('PageNotFound renders with description', () => {
    render(
      <Router>
        <PageNotFound />
      </Router>
    );

    expect(screen.getByText('Page not found :(')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Maybe the page you are looking for has been removed, or you typed in the wrong URL'
      )
    ).toBeInTheDocument();
  });
});
