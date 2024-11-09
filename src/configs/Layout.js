import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from '../views/partial/Navbar';
import Footer from '../views/partial/Footer';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> {/* This renders the nested route content */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
