import React from "react";
import "./App.css";
import { Component } from "react";

/* can probably extend Table and add code to it, instead of copying it all */
class CompleteTableGame extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor

    this.state = {
      rowVal: 10,
      colVal: 10,
      userGuessAbove: null,
      userGuessBelow: null,
      userGuessRight: null,
      userGuessLeft: null
    };

    this.handleRowChange = this.handleRowChange.bind(this);
    this.handleColChange = this.handleColChange.bind(this);
    this.rand = 0;
    this.above = 0;
    this.below = 0;
    this.left = 0;
    this.right = 0;
    this.renderBool = true;

    this.aboveCorrect = false;
    this.belowCorrect = false;
    this.leftCorrect = false;
    this.rightCorrect = false;
  }

  handleRowChange(event) {
    this.setState({ rowVal: event.target.value });
  }
  handleColChange(event) {
    this.setState({ colVal: event.target.value });
  }

  handleUserGuessAbove(event) {
    this.renderBool = false;
    this.setState({ userGuessAbove: event.target.value });
    // event.preventDefault();
  }
  handleUserGuessBelow(event) {
    this.renderBool = false;
    this.setState({ userGuessBelow: event.target.value });
    // event.preventDefault();
  }
  handleUserGuessLeft(event) {
    this.renderBool = false;
    this.setState({ userGuessLeft: event.target.value });
    // event.preventDefault();
  }
  handleUserGuessRight(event) {
    this.renderBool = false;
    this.setState({ userGuessRight: event.target.value });
    // event.preventDefault();
  }

  handleSubmit(event) {
    var userGuessAboveNum = parseInt(this.state.userGuessAbove, 10);
    var userGuessBelowNum = parseInt(this.state.userGuessBelow, 10);
    var userGuessLeftNum = parseInt(this.state.userGuessLeft, 10);
    var userGuessRightNum = parseInt(this.state.userGuessRight, 10);

    if (userGuessAboveNum === this.above) {
      alert("Congrats! Your Guess:" + this.state.userGuessAbove);
      this.aboveCorrect = true;
    } else {
      this.aboveCorrect = false;
    }
    if (userGuessBelowNum === this.below) {
      alert("Congrats! Your Guess:" + this.state.userGuessBelow);
      this.belowCorrect = true;
    } else {
      this.belowCorrect = false;
    }
    if (userGuessLeftNum === this.left) {
      alert("Congrats! Your Guess:" + this.state.userGuessLeft);
      this.leftCorrect = true;
    } else {
      this.leftCorrect = false;
    }
    if (userGuessRightNum === this.right) {
      alert("Congrats! Your Guess:" + this.state.userGuessRight);
      this.rightCorrect = true;
    } else {
      this.rightCorrect = false;
    }
    if (
      this.aboveCorrect |
      this.belowCorrect |
      this.leftCorrect |
      this.rightCorrect
    ) {
      alert("Try again. You have one or more answers incorrect.");
    }

    // document.write(this.rand);
    // document.write(this.state.userGuess);
    event.preventDefault();
  }

  makeRandom = () => {
    this.rand = Math.floor(
      Math.random() * (this.state.rowVal * this.state.colVal) + 1
    );
  };

  makeMissingNumbers = () => {
    var colNum = parseInt(this.state.colVal, 10);
    var rowNum = parseInt(this.state.rowVal, 10);
    var area = colNum * rowNum;

    this.above = this.rand - colNum;
    this.below = this.rand + colNum;
    this.left = this.rand - 1;
    this.right = this.rand + 1;

    if ((this.above === null) | (this.above < 1) | (this.above > area)) {
      this.above = 0;
    }
    if ((this.below === null) | (this.below < 1) | (this.below > area)) {
      this.below = 0;
    }
    if ((this.left === null) | (this.left < 1) | (this.left > area)) {
      this.left = 0;
    }
    if ((this.right === null) | (this.right < 1) | (this.right > area)) {
      this.right = 0;
    }
    // takes out right ? for random number on right edge- DO WE WANT THIS
    if (this.rand % colNum === 0) {
      this.right = 0;
    }
    // takes out left ? for random number on left edge
    if (this.left % colNum === 0) {
      this.left = 0;
    }

    // alert(
    //   this.rand +
    //     "00" +
    //     this.above +
    //     "00" +
    //     this.below +
    //     "00" +
    //     this.left +
    //     "00" +
    //     this.right
    // );
    // this.push(this.rand);
    // this.push(this.above);
    // this.push(this.below);
    // this.push(this.left);
    // this.push(this.right);
  };

  createTable = () => {
    let table = [];

    var colNum = parseInt(this.state.colVal, 10);

    for (let i = 0; i < this.state.rowVal; i++) {
      let children = [];
      for (let j = 1; j < this.state.colVal + 1; j++) {
        if (j <= this.state.colVal) {
          if (
            (colNum * i + j === this.above) |
            (colNum * i + j === this.below) |
            (colNum * i + j === this.left) |
            (colNum * i + j === this.right)
          ) {
            children.push(
              <td id="cell" caption="missing number" class="missingNumber">
                ?
              </td>
            );
          } else {
            children.push(<td id="cell">{colNum * i + j}</td>);
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
            {this.makeRandom()}
            {this.makeMissingNumbers()}
            {/* <label>{this.rand + "00"}</label>
            <label>{this.above + "00"}</label>
            <label>{this.below + "00"}</label>
            <label>{this.left + "00"}</label>
            <label>{this.right + "00"}</label> */}
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
          <div>
            <form onSubmit={this.handleSubmit}>
              <input
                type="number"
                class="inputBox"
                pattern="[1-100]*"
                value={this.state.userGuessAbove}
                onChange={this.handleUserGuessAbove}
              />
            </form>
            <form onSubmit={this.handleSubmit}>
              <input
                type="number"
                class="inputBox"
                pattern="[1-100]*"
                value={this.state.userGuessBelow}
                onChange={this.handleUserGuessBelow}
              />
            </form>
            <form onSubmit={this.handleSubmit}>
              <input
                type="number"
                class="inputBox"
                pattern="[1-100]*"
                value={this.state.userGuessLeft}
                onChange={this.handleUserGuessLeft}
              />
            </form>
            <form onSubmit={this.handleSubmit}>
              <input
                type="number"
                class="inputBox"
                pattern="[1-100]*"
                value={this.state.userGuessRight}
                onChange={this.handleUserGuessRight}
              />
              <input type="submit" value="Submit Guess" />
            </form>
          </div>
          <div>
            <td id="cell" text-align="center">
              <a href="\completetablegame">NEW GAME</a>
            </td>
          </div>
        </div>
      </div>
    );
  }
}

export default CompleteTableGame;
