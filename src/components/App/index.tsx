import React from 'react';

import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import { Layout } from 'components/Layout';
import { HomePage } from 'pages/HomePage';

import { paths } from '../../paths';

function ScrollToTop() {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

export const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={`${paths.home}`} element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* <Route path={`${paths.teamPage}`} element={<TeamPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
