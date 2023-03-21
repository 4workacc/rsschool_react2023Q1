import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';
type TProp = {
  page: string;
};
class Header extends React.Component<TProp> {
  render() {
    return (
      <div className="Header">
        <h1>{`Current page: ${this.props.page}`}</h1>
        <ul>
          <li key={0}>
            <Link to="/">HomePage</Link>
          </li>
          <li key={1}>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
