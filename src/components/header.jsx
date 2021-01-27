import React, { PureComponent } from "react";

class Header extends PureComponent {
  render() {
    return (
      <header className="habit-header">
        <span className="header-icon">
          <i className="fas fa-leaf "></i>
        </span>
        <h1 className="header-title">Habit Tracker</h1>
        <span className="habit-count total">{this.props.totalCount}</span>
      </header>
    );
  }
}

export default Header;
