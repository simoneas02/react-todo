import React, { Component } from 'react';

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

            <button onClick = {() => this.saveItem(item.id)}>SAVE</button>
          </li>

        )

      } else {
        
        return (

          <li key={item.id}>
            {item.text} 
            <button onClick = {() => this.removeItem(item.id)}>DELETE</button>
            <button onClick ={() => this.editItem(item.id) }>EDITE</button>
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