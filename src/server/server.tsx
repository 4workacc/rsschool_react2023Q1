import express from 'express';
import { renderToPipeableStream } from 'react-dom/server';
import App from '../components/App/App';
import React from 'react';

const app = express();
app.use(express.json());
const PORT = 5000;
app.use('/', (request, response) => {
    const { pipe } = renderToPipeableStream(<h1>1,/12</h1>, {
      bootstrapScripts: ['/main.js'],
      onShellReady() {
        response.setHeader('content-type', 'text/html');
        pipe(response);
      }
    });
  });
  
app.listen(PORT, () => {
    console.log(
        `Server running on ${PORT}.`
    )
});