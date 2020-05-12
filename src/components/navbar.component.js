import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="justify-content-center text-center">
        <nav className="navbar navbar-light bg-dark navbar-expand-lg ">
          <Link to="/" className="navbar-brand">
            AlgoSee
          </Link>
          <div className="collapse navbar-collapse ">
            <ul className="navbar-nav mr-auto justify-content-center text-center">
              <li className="navbar-item active">
                <Link to="/sorting" className="nav-link">
                  Sorting Algorithms
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/pathfinder" className="nav-link">
                  Pathfinding Algorithms
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/asymptotics" className="nav-link">
                  Asymptotics
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/approaches" className="nav-link">
                  Approaches
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/data-structures" className="nav-link">
                  Data Structures
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
