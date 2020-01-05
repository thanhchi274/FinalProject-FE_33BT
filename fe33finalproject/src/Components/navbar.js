import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
export default class Navbar extends Component {
  render () {
    return (
  <nav className="navbar navbar-expand-md bg-dark navbar-dark">
  {/* Brand */}
  <div className="container">
  <div className="col-sm-8">
  <img className="img-fluid mx-2" src="https://i.ibb.co/MMDksvw/icons8-movie-ticket.png" alt="icons8-movie-ticket" border={0} width={50}/>
  </div>
  <div className="col-sm-4"> 
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon" />
  </button>
  {/* Navbar links */}
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
      {/* Nối tới page khác */}
        <NavLink activeClassName="active" exact className="nav-link" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="active" className="nav-link" to="/list-movie">Movie</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="active" className="nav-link" to="/Theater">Theater</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="active" className="nav-link" to="/about">About</NavLink>
      </li>
    </ul>
  </div>
  </div>

  </div>
  {/* Toggler/collapsibe Button */}
</nav>

    )
  }
}