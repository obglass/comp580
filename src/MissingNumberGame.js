import React from "react";
import "./App.css";
import { Component } from "react";

class MissingNumberGame extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor

    this.state = {
      rowVal: 10,
      colVal: 10,
      userGuess: null
    };
    this.handleRowChange = this.handleRowChange.bind(this);
    this.handleColChange = this.handleColChange.bind(this);
    this.handleUserGuess = this.handleUserGuess.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleRandom = this.handleRandom.bind(this);
    this.rand = 0;
    this.renderBool = true;
  }

  handleRowChange(event) {
    this.setState({ rowVal: event.target.value });
  }
  handleColChange(event) {
    this.setState({ colVal: event.target.value });
  }
  handleUserGuess(event) {
    this.renderBool = false;
    this.setState({ userGuess: event.target.value });
    // event.preventDefault();
  }
  handleSubmit(event) {
    //this.submitBool = true;
    // this.push(this.state.userGuess);
    // this.push(this.rand);
    // document.write(this.state.userGuess);
    // document.write(this.rand);
    // alert("00" + this.rand + "00" + this.state.userGuess + "00");
    // this.renderBool = true;
    var userGuessNum = parseInt(this.state.userGuess, 10);
    if (userGuessNum == null) //this isn't working 
    {
      alert("You did not make a guess.");
    }
    else {
    if (userGuessNum === this.rand) {
      alert("Congrats, " + this.state.userGuess + " is the missing number!");
      
      // this.render();
    } else {
      alert("Sorry, " + this.state.userGuess + " isn't the missing number. Try Again");
    }
  }
    // document.write(this.rand);
    // document.write(this.state.userGuess);
    event.preventDefault();
  }
  // handleRandom() {
  //   this.setState({
  //     rand: Math.floor(
  //       Math.random() * (this.state.rowVal * this.state.colVal) + 1
  //     )
  //   });
  // }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.renderBool === false) {
      return false;
    }
    return true;
  }

  makeRandom = () => {
    this.rand = Math.floor(
      Math.random() * (this.state.rowVal * this.state.colVal) + 1
    );
  };

  createTable = () => {
    let table = [];

    for (let i = 0; i < this.state.rowVal; i++) {
      let children = [];
      for (let j = 1; j < this.state.colVal + 1; j++) {
        if (j <= this.state.colVal) {
          if (this.state.colVal * i + j === this.rand) {
            children.push(
              <td id="cell" class="missingNumber">
                <button onClick="promptAnswer">?</button>
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

  promptAnswer = () => {
    var ans=5; 
    console.log("clicked button");
    var myGuess=prompt("Enter the missing number");
    if (myGuess === ans)
    {
      alert("Congrats, "+ myGuess +" is the missing number!");
    }
    else 
    {
      alert("Sorry, " + myGuess + " is not the missing number. Try again.");
    }
  }

  render() {
    //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
    return (
      <div id="outer-div">
        <div id="inner-div">
          <table>
            <caption id="title">Find the Missing Number</caption>
            {this.makeRandom()}
            {this.createTable()}
          </table>
          <div class="bottomBar">
            <div class="guess">
              <form onSubmit={this.handleSubmit}>
                <input
                  aria-label="Input guess here"
                  type="number"
                  class="inputBox"
                  pattern="[1-100]*"
                  value={this.state.userGuess}
                  onChange={this.handleUserGuess}
                />
                <input type="submit" value="Submit Guess" class="submitBtn" />
              </form>
            </div>
            <div class="newGame">
              <td class="newGameBtn" text-align="center" >
                <a href="\missingnumbergame" class="newGameTxt">NEW GAME</a>
              </td>
            </div>
          </div>

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

export default MissingNumberGame;
