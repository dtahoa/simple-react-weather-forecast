import React, { useReducer, createContext } from 'react';
import { Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

import Header from '../components/header';
import Footer from '../components/footer';

import routes from '../routes';

import { containerFluid } from '../assets/styles';
import { RouteType } from '../types';
import reducer, { initialState } from '../reducers';

export const Store = createContext({} as any);

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'relative',
    top: '0',
    height: '100vh',
    '&:after': {
      display: 'table',
      clear: 'both',
      content: '" "',
    },
  },
  content: {
    marginTop: '70px',
    padding: '30px 15px',
    minHeight: 'calc(100vh - 222px)',
  },
  container: { ...containerFluid },
}));

const AppLayout: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const classes = useStyles();

  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      subtitle1: {
        fontSize: 16,
        fontWeight: 'bold',
      },
    },
  });

  const getRoutes = (routeList: RouteType[]) => {
    return routeList.map((prop) => {
      if (prop.layout === '/') {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={prop.name}
          />
        );
      }
      return null;
    });
  };

  return (
    <Store.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={theme}>
        <Header />
        <div className={classes.content}>
          <div className={classes.container}>{getRoutes(routes)}</div>
        </div>
        <Footer />
      </ThemeProvider>
    </Store.Provider>
  );
};

export default AppLayout;
