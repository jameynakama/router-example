import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <section>
      <h1>Stop, Header Time</h1>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/things/meat/">meat</Link></li>
        <li><Link to="/things/cheese/">cheese</Link></li>
        <li><Link to="/things/bread/">bread</Link></li>
        <li><Link to="/special-page/">something else</Link></li>
        <li><Link to="/no-sir-i-dont-like-it/">a 404</Link></li>
      </ul>
    </section>
  );
};

export default Header;
