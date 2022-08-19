import * as React from "react";
import { useCallback, useEffect, useState, useRef } from "react";
import { useNavigate, Outlet, Link, NavLink } from "react-router-dom";
import "./layout.css"
import Footer from "../footer/footer"

function Layout() {
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('/', {replace: true}), [navigate]);
    const [divHeight, setDivHeight] = useState(0);

    const ref = useRef(null);
  
    useEffect(() => {
      setDivHeight(ref.current.offsetHeight);
    }, []);

    return (
      <div>
        {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
        <div className="header" ref={ref}>
            <div className="header-bar">
                <div className="name" onClick={handleOnClick}>BRIAN HUYNH</div>
                <nav className="navbar">
                <NavLink className={(navData) => (navData.isActive ? 'home-act' : 'home')} to="/">HOME</NavLink>
                <NavLink className={(navData) => (navData.isActive ? 'projects-act' : 'projects')} to="/projects">PROJECTS</NavLink>
                <NavLink className={(navData) => (navData.isActive ? 'about-act' : 'about')} to="./about">ABOUT</NavLink>
                <NavLink className={(navData) => (navData.isActive ? 'resume-act' : 'resume')} to="./resume">RESUME</NavLink>
                <NavLink className={(navData) => (navData.isActive ? 'chat-act' : 'chat')} to="./chat">CHAT</NavLink>
                </nav>
            </div>
        </div>
  
        {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
        <div style={{}}>
            <Outlet />
        </div>
        <Footer></Footer>
      </div>
    );
}

export default Layout
