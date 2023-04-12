import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';
type TProp = {
  page: string;
};

const Header: FC<TProp> = ({ page }: TProp): React.ReactElement => {
  return (
    <div className="Header">
      <h1>{`Current page: ${page}`}</h1>
      <ul>
        <li key={0}>
          <Link to="/">HomePage</Link>
        </li>
        <li key={1}>
          <Link to="/about">About Us</Link>
        </li>
        <li key={2}>
          <Link to="/form">Separate route for form</Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
