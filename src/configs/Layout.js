import React, { useState } from 'react'
import { Outlet } from "react-router-dom";

import Navbar from '../views/partial/Navbar';
import Footer from '../views/partial/Footer';

const Layout = () => {
    return (
        <>
            <div>
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </>
    );
};

export default Layout;
