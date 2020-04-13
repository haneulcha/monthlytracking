import React from "react";

const Month = () => {
  let date = new Date();
  const Month = date.getMonth();

  return (
    <div>
      <h2>{Month + 1}월</h2>
      <h3>이달의 목표: </h3>
    </div>
  );
};

export default Month;
