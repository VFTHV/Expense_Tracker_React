import React from "react";

const TotalExpenses = (props) => {
  const onTotalExpenses = () => {
    if (props.inputs.length === 0) {
      return null;
    } else {
      const totalExpense = props.inputs.reduce((total, num) => {
        return total + num.amount;
      }, 0);
      return totalExpense;
    }
  };

  return (
    <tfoot>
      <tr className="table-dark">
        <th></th>
        <td>Total Expenses:</td>
        <td></td>
        <td>$ {onTotalExpenses()}</td>
        <td></td>
      </tr>
    </tfoot>
  );
};

export default TotalExpenses;
