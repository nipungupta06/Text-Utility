import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  const handlered=()=>{
    props.showcolor('red');
}
const handleblue=()=>{
    props.showcolor('blue');
}
const handlegreen=()=>{
    props.showcolor('green');
}
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-${props.mode}`} data-bs-theme={props.mode}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">{props.about}</Link>
               
              </li>
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li> */}
            </ul>
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
              <input type="radio" className="btn-check" onChange={handleblue} name="btnradio" id="btnradio1" autoComplete="off" />
              <label className="btn btn-outline-primary" htmlFor="btnradio1">Blue</label>

              <input type="radio" className="btn-check" onChange={handlered} name="btnradio" id="btnradio2" autoComplete="off" />
              <label className="btn btn-outline-danger" htmlFor="btnradio2">Red</label>

              <input type="radio" className="btn-check" onChange={handlegreen} name="btnradio" id="btnradio3" autoComplete="off" />
              <label className="btn btn-outline-success" htmlFor="btnradio3">Green</label>
            </div>
            <div className="form-check form-switch">
              <input className="form-check-input" onChange={props.toggledark} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ color: props.mode === "light" ? 'black' : 'white' }}>Enable Dark Mode</label>
            </div>
            {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-primary" type="submit">Search</button>
      </form> */}
          </div>
        </div>
      </nav>
    </>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
}
Navbar.defaultProps = {
  title: "Set Title here",
  about: "About"
}

