import React, { useState } from "react";
import AddExpense from "./AddExpense";

const Form = ({ onInputSubmit }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  const onSubmitClick = () => {
    onInputSubmit(name, date, amount);
    setName("");
    setDate("");
    setAmount("");
  };

  return (
    <form>
      <div className="row g-3 my-2">
        <div className="col-auto">
          <label htmlFor="name" className="col-form-label  fw-bold">
            Name:
          </label>
        </div>
        <div className="col">
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Where was the expense made? "
            required
          />
        </div>
      </div>

      <div className="row g-3 my-2">
        <div className="col-auto">
          <label htmlFor="date" className="col-form-label  fw-bold">
            Date:
          </label>
        </div>
        <div className="col">
          <input
            type="date"
            id="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div className="col-auto">
          <label htmlFor="amount" className="col-form-label  fw-bold">
            Amount:
          </label>
        </div>
        <div className="col">
          <input
            type="number"
            id="amount"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value))}
            required
          />
        </div>
        <AddExpense
          allInputs={{ name, date, amount }}
          onClick={onSubmitClick}
        />
      </div>
    </form>
  );
};

export default Form;
