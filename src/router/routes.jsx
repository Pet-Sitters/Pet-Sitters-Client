import { createBrowserRouter } from 'react-router-dom';

import { Account } from '../Layout/Account/Account';
import { Layout } from '../Layout/layout';
import { MyPets } from '../pages/Account/MyPets/MyPets';
import Orders from '../pages/Account/Orders/Orders';
import PersonalData from '../pages/Account/PersonalData/PersonalData.jsx';
import PetForm from '../pages/Account/PetForm/PetForm';
import { Settings } from '../pages/Account/Settings/Settings';
import { Sitters } from '../pages/Account/Sitters/Sitters';
import { Home } from '../pages/Home/Home';
import { SitterPage } from '../pages/SitterPage/SitterPage.jsx';
import { SittersList } from '../pages/Sitters/Sitters';
import ErrorPage from '../pages/error-pages';

import { BecomeSitter } from '../pages/BecomeSitter/BecomeSitter';
import links from './links.js';

export const router = createBrowserRouter([
  {
    path: links.home,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: `/${links.sitter}/:id`,
        element: <SitterPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: links.sitters,
        element: <SittersList />,
        errorElement: <ErrorPage />,
      },
      {
        path: links.becameSitter,
        element: <BecomeSitter />,
        errorElement: <ErrorPage />,
      },
      {
        path: links.account.base,
        element: <Account />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: links.account.personal,
            element: <PersonalData />,
            errorElement: <ErrorPage />,
          },

          {
            path: links.account.myPets,
            element: <MyPets />,
            errorElement: <ErrorPage />,
          },
          {
            path: links.account.addPets,
            element: <PetForm />,
            errorElement: <ErrorPage />,
          },
          {
            path: links.account.myOrders,
            element: <Orders />,
            errorElement: <ErrorPage />,
          },
          {
            path: links.account.mySitters,
            element: <Sitters />,
            errorElement: <ErrorPage />,
          },
          {
            path: links.account.settings,
            element: <Settings />,
            errorElement: <ErrorPage />,
          },
        ],
      },
    ],
  },
]);
