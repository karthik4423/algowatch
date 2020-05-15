import React, { Component } from "react";
//import { Link } from "react-router-dom";
import "./component-styles/selectionsort.css";

const defaultColor = "blue";
const whileCompare = "red";
const afterSort = "turquoise";
const ANIMATION_SPEED_MS = 5;
export default class Selectionsort extends Component {
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
    for (let i = 0; i < 100; i++) {
      array.push(randomIntFromInterval(5, 500));
    }
    this.setState({ array });
  }
  changeHeight(arraybars, min, i) {
    setTimeout(() => {
      //console.log(min);
      var temp = arraybars[min].style.height;
      //console.log(temp);
      arraybars[min].style.height = arraybars[i].style.height;
      arraybars[i].style.height = temp;
    }, i * 800);
  }
  changeColour(arraybars, min, j) {
    setTimeout(() => {
      arraybars[min].style.backgroundColor = "red";
      arraybars[j].style.backgroundColor = "red";
    }, j * 800);
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
          this.changeColour(arraybars, min, j);
        }
      }
      var temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
      this.changeHeight(arraybars, min, i);

      //this.changeColourSorted(arraybars, i);
    }
    console.log("new array", arr);
  }

  render() {
    const { array } = this.state;

    return (
      <div>
        <div className="row">
          <div className="array-container">
            {array.map((value, id) => (
              <div
                className="col-12 array-bar"
                key={id}
                style={{ backgroundColor: defaultColor, height: `${value}px` }}
              ></div>
            ))}
          </div>
        </div>
        <div>
          <button className="button" onClick={() => this.resetArray()}>
            Generate New Array
          </button>
          <button className="button" onClick={() => this.selectionSort()}>
            Sort!
          </button>
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
