import React from "react";
import "./App.css";
import { Component } from "react";

class Table extends Component {
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
    let table = [];

    for (let i = 0; i < this.state.rowVal; i++) {
      let children = [];
      for (let j = 1; j < this.state.colVal + 1; j++) {
        if (j <= this.state.colVal) {
          children.push(
            <td scope="col" id="cell">
              {this.state.colVal * i + j}
            </td>
          );
        }
      }
      table.push(
        <tr scope="row" id="indRow">
          {children}
        </tr>
      );
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

          <label>
            Rows:{" "}
            <input
              type="text"
              value={this.state.rowVal}
              onChange={this.handleRowChange}
            />{" "}
          </label>
          <label>
            Columns:{" "}
            <input
              type="text"
              value={this.state.colVal}
              onChange={this.handleColChange}
            />
          </label>
        </div>
      </div>
    );
  }
}

export default Table;
