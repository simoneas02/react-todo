import {createStore} from 'redux';
import update from 'immutability-helper';

const reducer = (state, action) => {

    switch(action.type) {
        case 'ADD':
            return state = update(state, {$push: [action.data]});
            break;

        case 'DELETE':
            console.log(action.id);
            return state = state.filter(item => {return item.id !== action.id});
            break;
        
        case 'EDITE':
            return state = state.map((item) => {
                if(item.id === action.id) {
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
            break;

        case 'UPDATE':
            return state = state.map((item) => {

                if(item.id === action.id) {
                    return (
                        update(state, {
                            isEditable: {$set: true},
                            id: {$set: item.id},
                            text: {$set: action.event.value}
                        })
                    )

                    } else {
                        return item
                    }
                });
            break;

        case 'SAVE':
            state = state.map((item) => {
                if(item.id === action.id) {
                    return(
                        update(state, {
                                isEditable: {$set: false},
                                id: {$set: item.id},
                                text: {$set: item.text}
                            }
                        )
                    ) 
                } else {
                    return item
                }
            });
        break

        default:
            return state;
            break;
    }

    return state;

};

const store = createStore(
                reducer, 
                    [
                        {id: 1, text:'React'}, 
                        {id: 2, text:'and'}, 
                        {id: 3, text:'Redux'}
                    ]);

export default store;