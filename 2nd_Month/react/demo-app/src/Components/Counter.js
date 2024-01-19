import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entry_count: 0,
      exit_count: 0,
    };
  }

  updateEntry() {
    this.setState(() => {
      return {
        entry_count: this.state.entry_count + 1,
      };
    });
  }

  updateExit() {
    this.setState(() => {
      return {
        exit_count: this.state.exit_count + 1,
        entry_count: this.state.entry_count - 1,
      };
    });
  }

  render() {
    const total_entries = this.state.entry_count + this.state.exit_count;

    return (
      <>
        <h1>Counter</h1>
        <div>
          <p>
            <b>Entries: </b>
            <span>{this.state.entry_count}</span>
          </p>
          <button class="btn btn-success" onClick={() => this.updateEntry()}>
            Add Entry
          </button>
        </div>
        <div class="mt-3 mb-3">
          <p>
            <b>Exits: </b>
            <span>{this.state.exit_count}</span>
          </p>
          <button class="btn btn-danger" onClick={() => this.updateExit()}>
            Add Exit
          </button>
        </div>
        <div>
          <h2>
            Total entry: <span>{total_entries}</span>
          </h2>
        </div>
      </>
    );
  }
}

export default Counter;
