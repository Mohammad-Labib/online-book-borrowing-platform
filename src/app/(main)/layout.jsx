import Navbar from '@/components/shared/Navbar';
import React from 'react';

const mainLayoutPage = ({children}) => {
    return (
            <>

            <Navbar></Navbar>
            {children}
            
            </>
        
    );
};

export default mainLayoutPage;