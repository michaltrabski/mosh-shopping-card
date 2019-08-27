import React, { Component } from "react";

class Item extends Component {
  state = {
    count: 0,
    items: [
      {
        id: "gsreawfdszfsdfs",
        name: "butter",
        count: 0
      },
      {
        id: "g54st34hh43253s",
        name: "onion",
        count: 3
      },
      {
        id: "ghtsa32424dsdg3",
        name: "orange",
        count: 102
      }
    ]
  };

  handleIncrement = id => {
    const items = [...this.state.items];
    const index = items.findIndex(obj => obj.id === id); // I need to find an array index where is current object to change
    const count = items[index].count + 1;
    items[index].count = count;
    // console.log(items[index].count);
    this.setState({ items });
  };

  handleDecrement = id => {
    const items = [...this.state.items];
    const index = items.findIndex(obj => obj.id === id); // I need to find an array index where is current object to change
    const count = items[index].count - 1;
    items[index].count = count === -1 ? 0 : count;
    // console.log(items[index].count);
    this.setState({ items });
  };
  render() {
    return (
      <>
        <div>
          {/* <span className={this.getBadgeClasses()}>{this.formatCount()}</span> */}
          <h3>Shooping card:</h3>
          <ul className="list-group" style={{ width: "400px" }}>
            {this.state.items.map(x => (
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={x.id}
              >
                {x.name}
                <span>
                  <span className="badge badge-primary badge-pill">
                    {x.count}
                  </span>
                  <button
                    className="btn btn-secondary ml-3"
                    onClick={() => this.handleDecrement(x.id)}
                  >
                    -
                  </button>
                  <button
                    className="btn btn-secondary ml-3"
                    onClick={() => this.handleIncrement(x.id)}
                  >
                    +
                  </button>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Item;
