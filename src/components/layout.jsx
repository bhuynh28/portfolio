import * as React from "react";
import Header from './header';
import { useEffect, useState, useRef } from "react";
import { Outlet } from "react-router-dom";
import "./layout.css"
import Footer from "./footer"

function Layout() {
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
            <Header />
        </div>
  
        {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
        <div style={{minHeight: '80vh'}}>
            <Outlet />
        </div>
        <Footer></Footer>
      </div>
    );
}

export default Layout
