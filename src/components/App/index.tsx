import React from 'react';

import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import { Layout } from 'components/Layout';
import { MenuPage } from 'pages/MenuPage';
import { SettingsPage } from 'pages/SettingsPage';
import { TasksPage } from 'pages/TasksPage';
import { AccountingProductionPage } from 'pages/AccountingProductionPage';
import { InternalInvoicesSearchPage } from 'pages/InternalInvoicesSearchPage';

import { InternalInvoicesSearchListPage } from 'pages/InternalInvoicesSearchListPage';

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
          <Route index element={<MenuPage />} />
          <Route path={`${paths.settingsPage}`} element={<SettingsPage />} />
          <Route path={`${paths.tasksPage}`} element={<TasksPage />} />
          <Route
            path={`${paths.accountingProductionPage}`}
            element={<AccountingProductionPage />}
          />
          <Route
            path={`${paths.internalInvoicesSearchPage}`}
            element={<InternalInvoicesSearchPage />}
          />
          <Route
            path={`${paths.internalInvoicesSearchListPage}`}
            element={<InternalInvoicesSearchListPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
