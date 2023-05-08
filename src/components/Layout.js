import React from 'react';

const Layout = ({children, className=""}) => {
    return (
        <div className={`w-full, h-full inline-block z-0 bg-light px-4 ${className}`}>
            {children}
        </div>
    )
}


export default Layout;