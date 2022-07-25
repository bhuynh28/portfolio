import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import "./nothing.css"

function Nothing() {
    return (
      <div>
        <h2>Nothing to see here!</h2>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
    )
}

export default Nothing