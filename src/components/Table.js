import React from "react";
import DeleteItem from "./DeleteItem";
import TotalExpenses from "./TotalExpenses";

const Table = (props) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Date</th>
          <th scope="col">Amount</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {props.inputs.length === 0 ? (
          <tr className="text-center">
            <th></th>
            <td>No Expenses Added yet!</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        ) : (
          props.inputs.map((input, index) => {
            return (
              <tr key={Math.random()}>
                <th scope="row">{index + 1}</th>

                <td>{input.name}</td>
                <td>{input.date}</td>
                <td>$ {input.amount}</td>
                <td>
                  <DeleteItem onItemRemove={() => props.onItemRemove(index)} />
                </td>
              </tr>
            );
          })
        )}
      </tbody>
      {props.inputs.length === 0 ? null : (
        <TotalExpenses inputs={props.inputs} />
      )}
    </table>
  );
};

export default Table;
