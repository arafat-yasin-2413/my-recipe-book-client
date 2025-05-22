import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';


const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>

            {/* eikhane footer bosbe */}
        </div>
    );
};

export default RootLayout;