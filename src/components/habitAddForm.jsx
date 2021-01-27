import React, { memo, useRef } from "react";

const HabitAddForm = memo(({ onAddHahit }) => {
  const inputRef = useRef();

  const handleCreateHabit = (e) => {
    e.preventDefault();
    const name = inputRef.current.value;
    name && onAddHahit(name);
    inputRef.current.value = "";
  };
  return (
    <form className="habit-form" onSubmit={handleCreateHabit}>
      <input
        className="habit-input"
        type="text"
        ref={inputRef}
        placeholder="Add Habit"
      />
      <button className="habit-add-btn" type="submit">
        Add
      </button>
    </form>
  );
});

export default HabitAddForm;
