'use client';
import { useState } from 'react';
import Link from 'next/link';
// import styles from './Navbar.module.css'; // optional for custom styles
import Logo from '@/public/Images/Main_Logo.png';
import './Navbar.css';
import Image from 'next/image';
export default function BootstrapNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg  text-light shadow-sm ">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold main_logo_contianer" href="/">
            <Image src={Logo} alt='Main logo ' className="main_logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
            <li className="nav-item">
              <Link className="nav-link" href="#">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">Features</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">Contact</Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-primary navbar_login_button">Login / SignUp</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
