import React from "react";

const Table = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Date</th>
          <th scope="col">Amount</th>
        </tr>
      </thead>
      <tbody>
        {props.inputs.map((input, index) => {
          return (
            <tr key={Math.random()}>
              <th scope="row">{index + 1}</th>

              <td>{input.name}</td>
              <td>{input.date}</td>
              <td>{input.amount}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
