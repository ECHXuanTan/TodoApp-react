import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../config/routes';

// Arrow Function components
export const HorizontalMenu = () => {
    return (
        <div style={{paddingTop: "30px",paddingBottom: "30px", background: "linear-gradient(#318CE7, #0039a6)"}}>
            {routes.map((item) => (
                <Link key={item.path} to={item.path} className="menuItem" ><b>{item.label}</b></Link>
            ))}
        </div>
    )
};