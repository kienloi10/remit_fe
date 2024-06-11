import React from 'react';
import './breadcrumb.css'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'; // Import Breadcrumb và BreadcrumbItem từ reactstrap
import { Link, useLocation } from 'react-router-dom'; // Import Link và useLocation từ react-router-dom
const Breadcrumbs = () => {
    const location = useLocation();
    const pathname = location.pathname.split('/').filter((x) => x)
    return (
        <div>
            <>
                <Breadcrumb>
                    <BreadcrumbItem active>
                        <Link to='/'>Home</Link>
                    </BreadcrumbItem>
                    {pathname.map((value, index) => {
                        const to = `/${pathname.slice(0, index + 1).join('/')}`
                        return (
                            <BreadcrumbItem key={to} active>
                                <Link to={to}>{value.charAt(0).toUpperCase() + value.slice(1)}</Link>
                            </BreadcrumbItem>

                        )
                    })}
                </Breadcrumb>

            </>
        </div>
    );
}

export default Breadcrumbs;
