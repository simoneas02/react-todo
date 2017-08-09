import React, { Component } from 'react';
import Button from './Button';
import iconEdit from '../assets/icons/icon-edit.svg';
import iconDelete from '../assets/icons/icon-delete.svg';
import iconSave from '../assets/icons/icon-save.svg';

class List extends Component {

  removeItem(id) {
    this.props.store.dispatch({type: 'DELETE', id: id});
  };
  
  editItem(id) {
    this.props.store.dispatch({type: 'EDITE', id: id})
  }

  updateItem(id) {
    let e = this.refs.text;
    this.props.store.dispatch({type: 'UPDATE', id: id, event: e});
  };

  saveItem(id) {
    this.props.store.dispatch({type: 'SAVE', id: id});
  };

  render() {

    const itemList = this.props.data.map((item)  => {
      
      if(item.isEditable) {
        
        return (

          <li key = {item.id}>
            <input type = 'text' 
                   ref = 'text'
                   value = {item.text} 
                   onChange = {() => this.updateItem(item.id)} />

            <Button
              onClick = {() => this.saveItem(item.id)}
              icon = {iconSave}>
              SAVE
            </Button>
          </li>

        )

      } else {
        
        return (

          <li key={item.id}>
            {item.text} 
            
            <Button
              onClick = {() => this.removeItem(item.id)}
              icon = {iconDelete}>
              DELETE
            </Button>

            <Button
              onClick = {() => this.editItem(item.id)}
              icon = {iconEdit}>
              EDIT
            </Button>
          </li>

        )
      }
    });

    return (

      <ul>
        {itemList}
      </ul>

    );
  };
};

export default List;