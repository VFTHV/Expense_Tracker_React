import React from "react";
import Form from "./components/Form";
import Table from "./components/Table";

class App extends React.Component {
  state = {
    inputs: [
      {
        name: "Mortgage",
        date: "2022-04-03",
        amount: 2000,
      },
    ],
  };

  onInputSubmit = (name, date, amount) => {
    const newInputs = this.state.inputs;
    newInputs.push({
      name: name,
      date: date,
      amount: amount,
    });

    this.setState({ inputs: newInputs });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <h1 className="fw-bold text-center">Expense tracker</h1>
          <p className="text-center fw-bold fs-4 text-success">
            Add A New Item:
          </p>
        </div>
        <Form onInputSubmit={this.onInputSubmit} />
        <Table inputs={this.state.inputs} />
      </div>
    );
  }
}

export default App;
