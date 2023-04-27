import ReactDOM from 'react-dom/client';
import App from './App';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const serverClient = () => {
  ReactDOM.hydrateRoot(
    document.getElementById('root') as HTMLElement,  
    <Provider store={store}>
      <BrowserRouter>  
          <App />   
      </BrowserRouter> 
    </Provider>
  );
};

serverClient();
