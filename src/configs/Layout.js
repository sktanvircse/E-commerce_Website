import React, { useState } from 'react'
import { Outlet } from "react-router-dom";


const Layout = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div>
                <Outlet />
            </div>
        </>
    );
};

export default Layout;
