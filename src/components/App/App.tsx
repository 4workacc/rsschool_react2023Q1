import React from 'react';
import './App.scss';
import Header from '../../components/Header/Header';
import MainPage from '../../Pages/MainPage';

export default function App() {
  return (
    <div className="App">
      <Header page={'MainPage'} />
      <MainPage />
    </div>
  );
}
