import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound: React.FC = () => {
  return (
    <>
      <h3>Page not found :(</h3>
      <p>
        Maybe the page you are looking for has been removed, or you typed in the
        wrong URL
      </p>
      <Link to="/">Home page</Link>
    </>
  );
};

export default PageNotFound;
