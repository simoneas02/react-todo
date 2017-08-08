import React, { Component } from 'react';
import '../assets/css/add-item.css';

class AddItem extends Component {

    addItem() {
    const newText = this.refs.text;
    const id = this.props.data.length + 1;

    let item = {
            id: id,
            text: newText.value,
            isEditable: false
          }

      if(newText.value) {
        this.props.store.dispatch({type: 'ADD', data: item})
    };

    newText.value = ""

  };

  render() {

    return (

        <div className = 'add-item'>
            <input type="text" ref="text"/>
            <button onClick={() => this.addItem()}>ADD</button>
        </div>

    )

  }

}

export default AddItem;