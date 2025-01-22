import React, { ReactNode } from 'react';
import Header from '../header/Header';
import '../layout/layout.scss'

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <div className="copyright">
                <p>© 2024 Digital Cabinet Movies. All rights reserved</p>
            </div>
        </>
    );
}

export default Layout;