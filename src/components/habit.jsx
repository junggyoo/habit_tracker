import React, { PureComponent } from "react";

class Habit extends PureComponent {
  render() {
    const { onIncrement, onDecrement, onDelete, habit } = this.props;
    return (
      <li className="habit">
        <span className="habit-name">{habit?.name}</span>
        <span className="habit-count">{habit?.count}</span>
        <button
          className="habit-button habit-increase"
          onClick={() => onIncrement(habit)}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={() => onDecrement(habit)}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={() => onDelete(habit)}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
