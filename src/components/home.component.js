import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row align-item-center justify-content-center">
          <div className="col-12">
            <h3 className="display-2 text-center">AlgoWatch</h3>
          </div>
          <div className="col-12 text-center">
            <p>For the problem solver.</p>
          </div>
        </div>
        <div className="row">
          <ul>
            <li>
              <Link to="/sorting" className="nav-link">
                Sorting Algorithms
              </Link>
            </li>
            <li>Pathfinding Algorithms</li>
          </ul>
        </div>
      </div>
    );
  }
}
