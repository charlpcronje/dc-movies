import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import './header.scss';
import logo from '@/assets/logo.png';
import { usePathname } from 'next/navigation';
import UserModal from '../user-modal/UserModal';


const headerNav = [
    {
        display: 'Home',
        path: '/',
    },
    {
        display: 'Movies',
        path: '/catalog/movie',
    },
];

const Header: React.FC = () => {
  const pathname = usePathname();
    const headerRef = useRef<HTMLDivElement>(null);
    const active = headerNav.findIndex((e) => e.path === pathname);

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current?.classList.add('shrink');
            } else {
                headerRef.current?.classList.remove('shrink');
            }
        };

      const handleScroll = () => {
        shrinkHeader();
      }


        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div ref={headerRef} className="header">
            <div className="header__wrap container">
                <div className="logo">
                    <Link href="/">
                        <img src={logo} alt="MoPlay" />
                    </Link>
                </div>
                <ul className="header__nav">
                    {headerNav.map((e, i) => (
                        <li key={i} className={i === active ? 'active' : ''}>
                            <Link href={e.path}>{e.display}</Link>
                        </li>
                    ))}
                </ul>
                <UserModal/>
            </div>
        </div>
    );
};

export default Header;