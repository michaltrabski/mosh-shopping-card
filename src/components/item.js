import React, { Component } from "react";

class Item extends Component {
  render() {
    const { id, name, count } = this.props.item;
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {name}
        <span>
          <span className="badge badge-primary badge-pill">{count}</span>
          <button
            className="btn btn-secondary ml-3"
            onClick={() => this.props.handleDecrement(id)}
          >
            -
          </button>
          <button
            className="btn btn-secondary ml-3"
            onClick={() => this.props.handleIncrement(id)}
          >
            +
          </button>
        </span>
      </li>
    );
  }
}

export default Item;
