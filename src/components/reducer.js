import { createStore } from "redux";
const initialState = [
    { itemName: "item1", quantity: 1, is_selected: false },
    { itemName: "item2", quantity: 1, is_selected: false }
];
function cartReducer(currentState = initialState, action) {
    switch (action.type) {
        case 'add_item': {
            return [...currentState, { itemName: action.itemName, quantity: action.quantity, is_selected: false }]
        }
        case 'update_quantity': {
            return currentState.map((elem) => {
                if (elem.itemName === action.if_item_present.itemName) {
                    return { ...elem, quantity: action.if_item_present.quantity + 1 }
                }
                return elem
            });

        }
        case 'select_item': {
            return currentState.map((elem) => {
                if (elem.itemName === action.itemName.itemName) {
                    return { ...elem, is_selected: !elem.is_selected }
                }
                return elem
            });
        }
        case 'delete_items':{
            return currentState=[];
        }
        default:
            return currentState
    }
}

const store = createStore(cartReducer);

export { store };