import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import "./nothing.css"

function Nothing() {
    return (
      <div className="nothing-container">
        <h2 style={{fontStyle: 'italic'}}>Nothing to see here!</h2>
        <p style={{marginTop: '2vh'}}>
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
    )
}

export default Nothing