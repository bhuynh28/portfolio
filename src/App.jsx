import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Layout from "./components/layout/layout";
import Intro from "./components/intro/intro";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Resume from "./components/resume/resume";
import Nothing from "./components/nothing/nothing";

const App = () => {
  return (
    <div>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Intro />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="resume" element={<Resume />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<Nothing />} />
        </Route>
      </Routes>
    </div>
  );;
};

export default App;