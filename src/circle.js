import React from "react";

function Circle(props) {
  return (
    <button
      className={props.value ? "done-day" : "yet-day"}
      onClick={() => {
        props.onClick();
      }}
    >
      {props.date + 1}
      {props.value ? "done" : "yet"}
    </button>
  );
  // date
}

export default Circle;
