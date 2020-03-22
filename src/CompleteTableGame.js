import React from "react";
import "./App.css";
import { Component } from "react";

/* can probably extend Table and add code to it, instead of copying it all */
class CompleteTableGame extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor

    this.state = {
      rowVal: 10,
      colVal: 10
    };
    this.handleRowChange = this.handleRowChange.bind(this);
    this.handleColChange = this.handleColChange.bind(this);
  }

  handleRowChange(event) {
    this.setState({ rowVal: event.target.value });
  }
  handleColChange(event) {
    this.setState({ colVal: event.target.value });
  }

  createTable = () => {
    var rand =
      Math.floor(Math.random() * (this.state.rowVal * this.state.colVal)) + 1;
    let table = [];

    var above = rand - 10;
    var below = rand + 10;
    var left = rand - 1;
    var right = rand + 1;

    // takes out right ? for random number on right edge- DO WE WANT THIS
    if (rand % this.state.colVal === 0) {
      right = null;
    }
    // takes out left ? for random number on left edge
    if (left % this.state.colVal === 0) {
      left = null;
    }

    for (let i = 0; i < this.state.rowVal; i++) {
      let children = [];
      for (let j = 1; j < this.state.colVal + 1; j++) {
        if (j <= this.state.colVal) {
          if (
            (10 * i + j === above) |
            (10 * i + j === below) |
            (10 * i + j === left) |
            (10 * i + j === right)
          ) {
            // if (10 * i + j == above) {
            //     children.push(
            //         <td id="cell" class="missingNumber">
            //           ?
            //         </td>
            //       );
            // }
            children.push(
              <td id="cell" caption="missing number" class="missingNumber">
                ?
              </td>
            );
          } else {
            children.push(<td id="cell">{this.state.colVal * i + j}</td>);
          }
        }
      }
      table.push(<tr id="indRow">{children}</tr>);
    }

    return table;
  };

  render() {
    //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
    return (
      <div id="outer-div">
        <div id="inner-div">
          <table>
            <caption id="title">Hundreds Chart</caption>
            {this.createTable()}
          </table>

          <div class="diyTable">
            <label>
              Rows:{" "}
              <input
                type="text"
                class="inputBox"
                value={this.state.rowVal}
                onChange={this.handleRowChange}
              />{" "}
            </label>
            <label>
              Columns:{" "}
              <input
                type="text"
                class="inputBox"
                value={this.state.colVal}
                onChange={this.handleColChange}
              />
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default CompleteTableGame;
