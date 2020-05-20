import React, { Component } from "react";
import Navbar from "./navbar.component";
import "./component-styles/sorting.css";

const defaultColor = "blue";
// const whileCompare = "red";
// const afterSort = "turquoise";
// const ANIMATION_SPEED_MS = 5;

export default class Sorting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < 5; i++) {
      array.push(randomIntFromInterval(5, 500));
    }
    this.setState({ array });
  }

  changeHeight(arraybars, a, b = a + 1) {
    setTimeout(() => {
      //var arr = this.state.array;
      //console.log(arraybars[a].style.height, arraybars[b].style.height);
      var temp = arraybars[a].style.height;
      arraybars[a].style.height = arraybars[b].style.height;
      arraybars[b].style.height = temp;
      //this.setState({ arr });
    }, a * 100);
  }

  bubbleSort() {
    var arr = this.state.array;
    var n = arr.length;
    console.log(arr);
    const arraybars = document.getElementsByClassName("array-bar");
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i; j++) {
        console.log(j, j + 1);
        if (arr[j] > arr[j + 1]) {
          // setTimeout(() => {
          //   var temp = arraybars[j].style.height;
          //   arraybars[j].style.height = arraybars[j + 1].style.height;
          //   arraybars[j + 1].style.height = temp;
          // }, j * 10);

          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          // console.log(arr[j], arr[j + 1]);
          this.changeHeight(arraybars, j, j + 1);
        }
      }
      console.log(arr);
    }
    console.log(arr);
    //this.setState({ arr });
  }

  selectionSort() {
    var arr = this.state.array;
    console.log(arr);
    var n = arr.length;
    var i = 0;
    var j = 0;
    const arraybars = document.getElementsByClassName("array-bar");
    for (i = 0; i < n; ++i) {
      var min = i;
      for (j = i; j < n; ++j) {
        if (arr[min] > arr[j]) {
          min = j;
        }
      }
      var temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
      this.changeHeight(arraybars, min, i);
    }
    console.log("new array", arr);
  }

  render() {
    const { array } = this.state;
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
                sorting is done on iterables, like arrays or lists. The
                following are the most common sorting algorithms available.
              </p>
            </div>
          </div>
          <div>
            <div className="row">
              <div className="array-container">
                {array.map((value, id) => (
                  <div
                    className="col-12 array-bar"
                    key={id}
                    style={{
                      backgroundColor: defaultColor,
                      height: `${value}px`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
            <div></div>
            <button className="button" onClick={() => this.resetArray()}>
              Generate New Array
            </button>
            <button className="button" onClick={() => this.selectionSort()}>
              Selection Sort
            </button>
            <button className="button" onClick={() => this.bubbleSort()}>
              Bubble Sort
            </button>
          </div>
        </div>
      </div>
    );
  }
}
// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
