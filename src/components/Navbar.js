import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                {props.about}
              </a>
            </li>
          </ul>
          
         <div className="form-check">
  <input className="form-check-input text-light" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={props.toggleModeDark}/>
  <label className="form-check-label" htmlFor="flexRadioDefault1">
    Enable Dark Mode
  </label>
</div>
         <div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={props.toggleModeLight}/>
  <label className="form-check-label" htmlFor="flexRadioDefault2">
    Enable Light Mode
  </label>
</div>
<div className="form-check">
  <input className="form-check-input text-light" type="radio" name="flexRadioDefault" id="flexRadioDefault3" onClick={props.toggleModeGreen}/>
  <label className="form-check-label" htmlFor="flexRadioDefault3">
  Enable Green Mode
  </label>
</div>
<div className="form-check">
  <input className="form-check-input text-light" type="radio" name="flexRadioDefault" id="flexRadioDefault4" onClick={props.toggleModeRed}/>
  <label className="form-check-label" htmlFor="flexRadioDefault4">
  Enable Red Mode
  </label>
</div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "TextUtils",
  about: "About",
};
