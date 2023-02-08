import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home2 from "./pages/Home2";
import Home from './pages/Home';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Compose from './pages/Compose';
import Update from './pages/Update';
import Register from './pages/Register';
import Login from './pages/Login';
import Layout2 from './pages/Layout2';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Layout />}>
          <Route index element={<Home />} />
          <Route path = "home" element ={<Home />} />
          <Route path = "about" element = {<About />} />
          <Route path = "contact" element = {<Contact />} />
          <Route path = "register" element = {<Register />} />
          <Route path = "login" element = {<Login />} />
        </Route>
      </Routes>
      <Routes>
        <Route path = "user" element = {<Layout2 />}>
          <Route index element={<Home2 />} />
          <Route exact path = "home" element = {<Home2 />} />
          <Route path = "about" element = {<About />} />
          <Route path = "compose" element = {<Compose />} />
          <Route path = "update" element = {<Update />} />
          <Route path = "contact" element = {<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


