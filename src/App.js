import React from "react";

class App extends React.Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <h1 className="fw-bold text-center">Expense tracker</h1>
          <p className="text-center fw-bold fs-4 text-success">
            Add A New Item:
          </p>
        </div>

        <div className="row g-3 my-2">
          <div className="col-auto">
            <label htmlFor="name" className="col-form-label  fw-bold">
              Name:
            </label>
          </div>
          <div className="col">
            <input type="text" id="name" className="form-control" />
          </div>
        </div>
        <div className="row g-3 my-2">
          <div className="col-auto">
            <label htmlFor="date" className="col-form-label  fw-bold">
              Date:
            </label>
          </div>
          <div className="col">
            <input type="date" id="date" className="form-control" />
          </div>
          <div className="col-auto">
            <label htmlFor="Amount" className="col-form-label  fw-bold">
              Amount:
            </label>
          </div>
          <div className="col">
            <input type="number" id="amount" className="form-control" />
          </div>
        </div>
        <div className="row mt-4 text-center">
          <div className="col">
            <button className="btn btn-success">Add Expense</button>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Date</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>May 4 2022</td>
              <td>2000$</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
