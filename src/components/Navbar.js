import React from 'react';
// import { a } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Sunny Website</a>
        <buthrefn className="navbar-hrefggler" type="buthrefn" data-bs-hrefggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="hrefggle navigation">
          <span className="navbar-hrefggler-icon"></span>
        </buthrefn>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auhref mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-a active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-a" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-a" href="/services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-a" href="/contact">Contact</a>
            </li> 
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <buthrefn className="btn btn-outline-success" type="submit">Search</buthrefn>
          </form>
        </div>
      </div>
    </nav>
  );
};
