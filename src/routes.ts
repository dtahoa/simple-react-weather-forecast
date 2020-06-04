import WeatherContainer from './containers/weather';

// Config routes here
const dashRoutes = [
  {
    path: '/',
    name: 'WeatherDashboard',
    component: WeatherContainer,
    layout: '/',
  },
];

export default dashRoutes;
