import React from "react";
import "./Header.css";


function Header() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand header__logo" href="#">
          <span className="uppers">LOREM</span>
          <br />
          <span className="lowers">IPSUM</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse header__nav navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav header__ul mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                About Us <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Mentors
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2 header__search"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>

          <nav className="navbar navbar-light bg-white">
            <a className="navbar-brand" href="#">
              <img
                className="header__img"
                src="https://drive.google.com/uc?id=1JfH-XKk0fRY5OyMNOst1oW2arsZ74puS "
                width="30"
                height="30"
                alt=""
              />
            </a>
          </nav>
        </div>
      </nav>
    </div>
  );
}

export default Header;