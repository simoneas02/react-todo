import React, { Component } from 'react';
import Button from './Button';
import iconEdit from '../assets/icons/icon-edit.svg';
import iconDelete from '../assets/icons/icon-delete.svg';
import iconSave from '../assets/icons/icon-save.svg';
import '../assets/style/list-item.css';

class ListItem extends Component {

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

          <li className = 'list__edit' key = {item.id}>
            <input className = 'list__edit__text' type = 'text' 
                   ref = 'text'
                   value = {item.text} 
                   onChange = {() => this.updateItem(item.id)} />

            <Button
              onClick = {() => this.saveItem(item.id)}
              icon = {iconSave}>
            </Button>
          </li>

        )

      } else {
        
        return (

          <li className = 'list__item' key={item.id}>
            <div>
              {item.text}
            </div> 
            
            <div>
              <Button
              onClick = {() => this.removeItem(item.id)}
              icon = {iconDelete}>
            </Button>

            <Button
              onClick = {() => this.editItem(item.id)}
              icon = {iconEdit}>
            </Button>
            </div>
          </li>

        )
      }
    });

    return (

      <ul className = 'list'>
        {itemList}
      </ul>

    );
  };
};

export default ListItem;