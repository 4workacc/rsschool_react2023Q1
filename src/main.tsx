import React from 'react';
import App from './components/App/App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutUs from './Pages/AboutUs';
import NotFound404 from './Pages/NotFound404';
import Form from './Pages/Form/Form';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { rickApi } from './redux/rtk/getRequest';
import rootReduces from './redux/reducers/rootReduces';
import { hydrate } from 'react-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound404 />,
  },
  {
    path: '/about',
    element: <AboutUs />,
    errorElement: <NotFound404 />,
  },
  {
    path: '/form',
    element: <Form />,
    errorElement: <NotFound404 />,
  },
  {
    path: '/*',
    element: <NotFound404 />,
    errorElement: <NotFound404 />,
  },
]);

const store = configureStore({
  reducer: {
    rootReducer: rootReduces,
    [rickApi.reducerPath]: rickApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickApi.middleware),
});

hydrate(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
  document.getElementById('root')
);
