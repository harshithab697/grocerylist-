import './itemList.css';
import { FaRegCheckCircle } from 'react-icons/fa';
import { FaRegCircle } from 'react-icons/fa';
import { connect } from 'react-redux';

function ItemList(props) {
    const { itemlist = [], dispatch } = props;

    const toggleComplete = (item) => {
        dispatch({ type: 'select_item', itemName: item })
    }

    return (
        <div className='item-list'>
            {itemlist.map((item, index) => (
                <div className='item-container'>
                    <div className='item-name' onClick={() => toggleComplete(item)} >
                        {item.is_selected ? (
                            <>
                                <FaRegCheckCircle />
                                <span className="completed" >{item.itemName}</span>
                            </>
                        ) : (
                            <>
                                <FaRegCircle />
                                <span>{item.itemName}</span>
                            </>
                        )}
                    </div>
                    <div className='quantity'>
                        <span> {item.quantity} </span>
                    </div>

                </div>
            ))
            }
        </div>
    )

}


function mapStateToPropsItemList(state) {
    return { itemlist: state };
}
const ConnetedItemList = connect(mapStateToPropsItemList)(ItemList);

export default ConnetedItemList;