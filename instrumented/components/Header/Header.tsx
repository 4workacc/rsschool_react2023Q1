import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header: FC = (): React.ReactElement => {
 
  return (
    <div className="Header">    
      <ul>
        <li key={0}>
          <Link to="/">HomePage</Link>
        </li>
        <li key={1}>
          <Link to="/aboutUs">About Us</Link>
        </li>
        <li key={2}>
          <Link to="/form">Separate route for form</Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
