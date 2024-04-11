import React from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import {Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Navbar />
      <switch>
        <Routes>

          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/services" exact component={Services} />
          <Route path="/contact" exact component={Contact} />
        </Routes>
      </switch>
    </>
  );
};
