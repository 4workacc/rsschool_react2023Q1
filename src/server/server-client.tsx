import { router, store } from '../main';
import { hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router';
import React from 'react';

hydrateRoot(
    document.getElementById('root')!,
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>,
)