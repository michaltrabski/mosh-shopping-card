import React, { Component } from "react";
import Item from "./item";

class Items extends Component {
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
    this.setState({ items });
  };

  handleDecrement = id => {
    const items = [...this.state.items];
    const index = items.findIndex(obj => obj.id === id); // I need to find an array index where is current object to change
    const count = items[index].count - 1;
    items[index].count = count === -1 ? 0 : count;
    this.setState({ items });
  };

  handleDelete = id => {
    const items = [...this.state.items].filter(x => x.id !== id);
    this.setState({ items });
  };

  render() {
    return (
      <div>
        <h3>Your shopping card has {this.state.items.length}</h3>
        <ul className="list-group" style={{ width: "400px" }}>
          {this.state.items.map(x => (
            <Item
              key={x.id}
              item={x}
              handleDecrement={this.handleDecrement}
              handleIncrement={this.handleIncrement}
              handleDelete={this.handleDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Items;
