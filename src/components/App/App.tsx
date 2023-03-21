import React from 'react';
import './App.scss';
import MainPage from '../../Pages/MainPage';
import Header from '../../components/Header/Header';

export default function App() {
  return (
    <div className="App">
      <Header page={'MainPage'} />
      <MainPage />
    </div>
  );
}
