import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./routes/home";
import About from "./routes/about";
import Projects from "./routes/projects";
import Resume from "./routes/resume";
import Nothing from "./routes/nothing";
import Chat from "./routes/chat";
import Snake from "./routes/snake";
import Apps from "./routes/apps";
import './App.css';

const App = () => {
  return (
    <div style={{margin: 0, width: '100vw', maxWidth: '100%'}}>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="resume" element={<Resume />} />
          <Route path="apps" element={<Apps />} />
          <Route path="chat" element={<Chat />} />
          <Route path="snake" element={<Snake />} />

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