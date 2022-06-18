import React from "react";

const AddExpense = ({ onClick, allInputs }) => {
  const onInputSubmit = (e) => {
    if (
      allInputs.name.length !== 0 &&
      allInputs.date.length !== 0 &&
      allInputs.amount.length !== 0
    ) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div className="row mt-4 text-center">
      <div className="col">
        <button
          type="submit"
          className="btn btn-success"
          onClick={onInputSubmit}
        >
          Add Expense
        </button>
      </div>
    </div>
  );
};

export default AddExpense;
