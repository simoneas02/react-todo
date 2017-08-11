import React, { Component } from 'react';
import Button from './Button';
import iconAdd from '../assets/icons/icon-add.svg';
import '../assets/style/add-item.css';

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
            <input className = 'add-item__input' type = "text" ref="text"/>
            <Button
              onClick = {() => this.addItem()}
              icon = {iconAdd}>
            </Button>
        </div>

    )

  }

}

export default AddItem;