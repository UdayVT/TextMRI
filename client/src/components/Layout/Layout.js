import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Layout.css';
import logo from './logo.png';
import userImage from './userImage.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Layout = () => {
  return (
    <>
        <header className="header">
            <div className="header-left">
                <img src={logo} alt="TextMRI Logo" className="logo" />
                <nav className="nav">
                    <NavLink to="/main/home" exact activeClassName="active">Home</NavLink>
                    <NavLink to="/main/projects" activeClassName="active">Projects</NavLink>
                    <NavLink to="/main/resonance-visualizer" activeClassName="active">Resonance Visualizer</NavLink>
                </nav>
            </div>
            <div className="header-right">
                <i className="fas fa-search"></i>
                <i className="fas fa-bell"></i>
                <i className="fas fa-cog" id="right-most"></i>
                <img src={userImage} alt="User" className="user-image" />
            </div>
        </header>
        <main>
            <Outlet />
        </main>
    </>
  );
}

export default Layout;
