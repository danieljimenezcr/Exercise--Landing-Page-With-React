import React from "react";

const Navbar = () => {

    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark " >
      <div className="container-fluid mx-5">
        <a className="a-font navbar-brand" href="#">Start Boostrap</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item pe-4">
              <a className="a-font nav-link" href="#about">Home</a>
            </li>
            <li className="nav-item pe-4">
              <a className="a-font nav-link" href="#skills">About</a>
            </li>
            <li className="nav-item pe-4">
              <a className="a-font nav-link">Services</a>
            </li>
            <li className="nav-item pe-4">
              <a className="a-font nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
)
}

export default Navbar 