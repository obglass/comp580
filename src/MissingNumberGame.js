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
    //this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleRandom = this.handleRandom.bind(this);
    this.promptAnswer = this.promptAnswer.bind(this);
    this.rand = 0;
    this.renderBool = true;
  }

  handleRowChange(event) {
    this.setState({ rowVal: event.target.value });
  }
  handleColChange(event) {
    this.setState({ colVal: event.target.value });
  }
  
  
  
  (event) {
    this.renderBool = false;
    this.setState({ userGuess: event.target.value });
    // event.preventDefault();
  }

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
               <button onClick={this.promptAnswer}>?</button>
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
    var myGuess=prompt("Enter the missing number");
    if(myGuess == null)
    {
      alert("You did not submit a guess.");
    }
    else 
    {
      if (myGuess === this.rand.toString())
      {
        alert("Congrats, "+ myGuess +" is the missing number!");
       
      }
      else
      {
        if(myGuess === "")
        {
          alert("You did not enter a number.");
        }
        else 
        {
          alert("Sorry, " + myGuess + " is not the missing number. Try again.");
        }
      }
    }
    };

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

            <div class="newGame">
              <td class="newGameBtn" text-align="center" >
                <a href="\missingnumbergame" class="newGameTxt">NEW GAME</a>
              </td>
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
