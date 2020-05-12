import React, { Component } from "react";
import Navbar from "./navbar.component";
import Quicksort from "./quicksort.component";
//import { Link } from "react-router-dom";
import "./component-styles/sorting.css";

export default class Sorting extends Component {
  render() {
    return (
      <div>
        <header className="jumbotron ">
          <h1 className="display-2 text-center">Sorting Algorithms</h1>
        </header>
        <Navbar />
        {<br />}
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="text-center">What is Sorting?</h3>
            </div>
            <div className="col-12">
              <p>
                By definition, sorting means to arrange systematically in groups
                or to separate according to type. Usually in Computer Science,
                sorting is done in iterables, like arrays or lists. The
                following are the most common sorting algorithms available.
              </p>
            </div>
            <div className="col-12">
              <ul>
                <li>Quick Sort</li>
                <li>Bubble Sort</li>
              </ul>
            </div>
          </div>
          <div className="row quicksort">
            <Quicksort />
          </div>
        </div>
      </div>
    );
  }
}
