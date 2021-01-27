import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

class Habits extends Component {
  render() {
    const {
      onIncrement,
      onDecrement,
      onDelete,
      onAddHahit,
      onReset,
    } = this.props;
    return (
      <>
        <HabitAddForm onAddHahit={onAddHahit} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              habit={habit}
              key={habit?.id}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              onDelete={onDelete}
            />
          ))}
        </ul>
        <button className="habits-reset" onClick={onReset}>
          Reset All
        </button>
      </>
    );
  }
}

export default Habits;
