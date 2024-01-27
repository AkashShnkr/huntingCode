// components/Layout.js

import React from 'react';
import Navbar from './page';
import Footer from '../Footer';

const MainLayout = ({ children }) => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default MainLayout;
