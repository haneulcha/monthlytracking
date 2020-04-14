import React, { useState, useEffect } from "react";

const Month = (props) => {
  const [input, setInput] = useState("");
  const [goal, setGoal] = useState();

  const getGoal = () => {
    const goal = JSON.parse(localStorage.getItem("Goal"));
    if (goal) setGoal(goal);
  };

  const deleteGoal = (e) => {
    e.preventDefault();
    setGoal(null);
    localStorage.removeItem("Goal");
  };

  useEffect(() => {
    getGoal();
  }, []);

  return (
    <div>
      <h2>{props.thisMonth}월</h2>
      <form
        onSubmit={() => {
          props.setLS("Goal", input);
        }}
      >
        <label>이달의 목표 : </label>
        {goal ? (
          goal
        ) : (
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        )}
      </form>
      {goal ? <button onClick={(e) => deleteGoal(e)}>RESET</button> : ""}
    </div>
  );
};

export default Month;
