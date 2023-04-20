import { router, store } from "../main";
import { renderToPipeableStream } from "react-dom/server";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
import App from "components/App/App";

export function renderServer (
    uri: string
) {
    return renderToPipeableStream(
        <Provider store={store}>
       <StaticRouter location={uri}>
        <App />
      </StaticRouter>
    </Provider>,
    )
}