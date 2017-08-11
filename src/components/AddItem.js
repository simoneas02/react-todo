import React, { Component } from 'react';
import Button from './Button';
import iconAdd from '../assets/icons/icon-add.svg';
import '../assets/style/add-item.css';

class AddItem extends Component {
     constructor() {
        super();

        this.state = {
            isActive: false
        };
    }

    validActive() {
        this.refs.text.value
        ? this.setState({isActive: true})
        : this.setState({isActive: false});
    }

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

     const customStyle = {
          add: {
              backgroundColor: '#98f442'
          }
     }

    return (

        <div className = 'add-item'>
            <input
                ref = 'text'
                className = 'add-item__input' 
                type = 'text'
                placeholder = 'What you need add?'
                onChange={() => this.validActive()}
            />

            <Button
                onClick = {() => this.addItem()}
                customStyle={customStyle.add}
                icon = {iconAdd}>
                ADD
            </Button>
        </div>

    )

  }

}

export default AddItem;