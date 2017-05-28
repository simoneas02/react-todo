import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  };

  addItem() {
    const newText = this.refs.text;
    const itemList = this.state.list;
    const index = itemList.length + 1;
     
      if(newText.value !== "") {
        itemList.push(
          {
            id: index,
            text: newText.value
          }
        );
    };

    this.setState({ list: itemList });
    newText.value = ""
  };

  removeItem(id) {
    const itemList = this.state.list.filter((item) => {
      return item.id !== id;
    });

    this.setState({ list: itemList });
  };
 
  render() {
    const itemList = this.state.list.map((item)  => {
      return (
        <li>
          { item.text } 
          <button onClick={ this.removeItem.bind(this, item.id) }>x</button>
        </li>
      );
    });

    return (
      <div>
        <h1>TO DO List</h1>

        <div>
          <input type="text" ref="text"/>
          <button onClick={ this.addItem.bind(this) }>ADD</button>
        </div>
        <div>
          <ul>
            { itemList }
          </ul>
        </div>
      </div>
    );
  };
};

export default List;