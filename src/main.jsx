import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './component/Home/Home';
import { Layout } from './component/Layout/Layout';
import About from './component/About/About';
import Projects from './component/Projects/Projects';

import ContactUS from './component/ContactUS/ContactUS';
import Resume from './component/Resume/Resume';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="Resume" element={<Resume />} />
          <Route path="contactus" element={<ContactUS />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
);
