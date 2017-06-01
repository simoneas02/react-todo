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
    const id = itemList.length + 1;
     
      if(newText.value !== "") {
        itemList.push(
          {
            id: id,
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
        return item
      }
    });

    this.setState({ list: itemList} );
  }

  updateItem(id, e) {
    e.preventDefault();

    const itemList = this.state.list.map((item) => {

      if(item.id === id) {
        return ({
          isEditable: true,
          id: item.id,
          text: e.target.value
        })
        } else {
          return item
        }
     })

    this.setState({ list: itemList})
  };

  saveItem(id) {
    const itemList = this.state.list.map((item) => {

      if(item.id === id) {
        return(
          {
            isEditable: false,
            id: item.id,
            text: item.text
          }
        ) 
      } else {
        return item
      }
    });

    this.setState({ list: itemList })
  };

  render() {
    const itemList = this.state.list.map((item)  => {
      if(item.isEditable) {
        return (
            <li key={item.id}>
              <input type="text"
                value={ item.text } 
                onChange={ this.updateItem.bind(this, item.id) }/>
                <button onClick={ this.saveItem.bind(this, item.id) }>SAVE</button>
            </li>
          )
      } else {
        return (
          <li key={item.id}>
              { item.text } 
              <button onClick={ this.removeItem.bind(this, item.id) }>DELETE</button>
              <button onClick={ this.editItem.bind(this, item.id) }>EDITE</button>
            </li>
        )
      }
    });

    return (
      <div>
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