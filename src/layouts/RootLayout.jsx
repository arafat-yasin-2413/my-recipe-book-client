import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Home from '../components/Home/Home';


const RootLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Navbar></Navbar>

       
            <Outlet></Outlet>

            {/* eikhane footer bosbe */}
        </div>
    );
};

export default RootLayout;