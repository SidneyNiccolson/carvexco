import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = props => (
  // eslint-disable-next-line
  <nav
    className="navbar"
    role="navigation"
    aria-label="main navigation"
    style={{
      borderBottom: "solid 4px #1991B3"
    }}
  >
    <section className="container">
      <div className="navbar-brand">
        <strong className="navbar-item">{props.title}</strong>
        <span
          className="nav-toggle navbar-burger"
          onClick={() => {
            let toggle = document.querySelector(".nav-toggle");
            let menu = document.querySelector(".navbar-menu");
            toggle.classList.toggle("is-active");
            menu.classList.toggle("is-active");
          }}
        >
          <span />
          <span />
          <span />
        </span>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <NavLink
            to="/"
            className="navbar-item"
            style={{
              borderBottom: "solid 1px #1991B3"
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="navbar-item"
            activeClassName="is-active"
          >
            About us
          </NavLink>
          <NavLink
            to="/products"
            className="navbar-item"
            activeClassName="is-active"
          >
            Product Range
          </NavLink>
          <NavLink
            to="/contact"
            className="navbar-item"
            activeClassName="is-active"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </section>
  </nav>
);

export default NavBar;
