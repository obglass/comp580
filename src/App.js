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
    // this.handleRowChange = this.handleRowChange.bind(this);
    // this.handleColChange = this.handleColChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handle = this.handle.bind(this);
  }

  // handleRowChange(event) {
  //   console.log(event.target.value);
  //   this.setState({ rowVal: event.target.value });
  //   console.log(this.state.rowVal);
  // }
  // handleColChange(event) {
  //   this.setState({ colVal: event.target.value });
  // }
  // handle(event) {
  //   console.log("handle" + event.target.value);
  // }
  // handleSubmit(event) {
  //   console.log("submitted");
  // }

  createTable = () => {
    let table = [];

    for (let i = 0; i < this.state.rowVal; i++) {
      let children = [];
      for (let j = 1; j < this.state.colVal + 1; j++) {
        children.push(<td id="cell">{10 * i + j}</td>);
      }
      table.push(
        <tr id="indRow">
          <th scope="row">{children}</th>
        </tr>
      );
    }
    return table;
  };

  render() {
    //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
    return (
      <div>
        <table>
          <caption id="title">Hundreds Chart</caption>
          <tbody>{this.createTable()}</tbody>
        </table>

        {/* <form onSubmit={this.handleSubmit}>
          <label>
            Rows:{" "}
            <input
              type="text"
              value={this.state.rowVal}
              onChange={this.handle}
              // onSubmit={this.handleRowChange}
            />{" "}
          </label>
          <label>
            Columns:{" "}
            <input
              type="text"
              value={this.state.colVal}
              onChange={this.handleColChange}
              // onSubmit={this.handleColChange}
            />{" "}
          </label>
          <input type="submit" value="Submit" />
        </form> */}
      </div>
    );
  }
}

export default Table;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">HELLOOO world from liv</header>
//     </div>
//   );
// }

// export default App;
