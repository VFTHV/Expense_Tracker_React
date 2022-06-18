import React from "react";

const AddExpense = ({ onClick }) => {
  return (
    <div className="row mt-4 text-center">
      <div className="col">
        <button
          type="submit"
          className="btn btn-success"
          onClick={(e) => {
            e.preventDefault();
            onClick();
          }}
        >
          Add Expense
        </button>
      </div>
    </div>
  );
};

export default AddExpense;
