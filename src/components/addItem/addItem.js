import './addItem.css';
import { useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { connect } from 'react-redux';

function AddItem(props) {
    
    const { itemlist, dispatch } = props;

    function addItem(itemName, quantity) {
        return {
            type: 'add_item',
            itemName: itemName,
            quantity: quantity
        }
    }
    const [item, setItem] = useState("");
    const AddItem = (event) => {
        const if_item_present = itemlist.find((elem) => {
            return elem.itemName === item;
        });
        if (if_item_present) {

            dispatch({ type: 'update_quantity', if_item_present: if_item_present })
        }
        else if (item.length > 0) {
            dispatch(addItem(item, 1));
        }
        setItem("");

    };
    const handleChange = (event) => {
        setItem(event.target.value);
    }
    return (
        <div className='add-item-box' >
            <input className='add-item-input' value={item} onChange={handleChange} placeholder='Add an item...' />
            <button onClick={AddItem} className="add-item-button" > <FaCartPlus /> </button>
        </div>
    )
}


function mapStateToPropsAddItem(state) {
    return { itemlist: state };
}

const ConnetedAddInput = connect(mapStateToPropsAddItem)(AddItem);
export default ConnetedAddInput;