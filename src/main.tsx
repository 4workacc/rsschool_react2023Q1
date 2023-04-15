import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutUs from './Pages/AboutUs';
import NotFound404 from './Pages/NotFound404';
import Form from './Pages/Form/Form';
import { configureStore } from '@reduxjs/toolkit';
import rootReduces from './redux/reducers/rootReduces';
import { Provider } from 'react-redux';
import { rickApi } from './redux/rtk/getRequest';

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

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
