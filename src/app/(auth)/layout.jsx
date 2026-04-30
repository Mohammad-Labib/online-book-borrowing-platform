import Navbar from '@/components/shared/Navbar';
import React from 'react';

const authLayoutPage = ({children}) => {
    return (
        <>
        
        <Navbar></Navbar>
        {children}

        </>
    );
};

export default authLayoutPage;