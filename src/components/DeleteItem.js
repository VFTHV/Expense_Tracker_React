import React from "react";

const DeleteItem = (props) => {
  return (
    <button className="btn btn-danger" onClick={props.onItemRemove}>
      X
    </button>
  );
};

export default DeleteItem;
