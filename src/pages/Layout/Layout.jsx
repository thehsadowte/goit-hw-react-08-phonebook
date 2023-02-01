import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/register">REGISTER</Link>
              </li>
              <li>
                <Link to="/login">LOGIN</Link>
              </li>
              <li>
                <Link to="/contacts">CONTACTS</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <p>user email</p>
          <button type="button">LOG OUT</button>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
