import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      isEditable: false
    };
  };

  addItem() {
    const newText = this.refs.text;
    const itemList = this.state.list;
    const isEditable = this.state.isEditable;
    const index = itemList.length + 1;
     
      if(newText.value !== "") {
        itemList.push(
          {
            id: index,
            text: newText.value,
            isEditable: false
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

  editItem(id) {
    const itemList = this.state.list.map((item) => {
      if(item.id === id) {
        return (
          {
            isEditable: true,
            id: item.id,
            text: item.text
          }
        )
      } else {
        return (
          {
            isEditable: false,
            id: item.id,
            text: item.text
          }
        )
      }
    });
    this.setState({ list: itemList} );
  }

  updateItem(id) {
    const value = this.refs[id];

    const itemList = this.state.list;


 };

  saveItem(id) {

  }

  render() {
    const itemList = this.state.list.map((item)  => {
      if(item.isEditable) {
        return (
            <li>
              <input type="text"
                ref={ item.id }
                value={ item.text }
                onChange={ this.updateItem.bind(this, item.id) }/>
                <button onClick={ this.saveItem.bind(this, item.id) }>SAVE</button>
            </li>
          )
      } else {
        return (
          <li>
              { item.text } 
              <button onClick={ this.removeItem.bind(this, item.id) }>DELETE</button>
              <button onClick={ this.editItem.bind(this, item.id) }>EDITE</button>
            </li>
        )
      }
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