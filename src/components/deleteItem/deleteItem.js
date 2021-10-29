import { FaTrashAlt } from 'react-icons/fa';
import { connect } from 'react-redux';
import './deleteItem.css';
function DeleteItem(props) {
    const { itemlist = [], dispatch } = props;

    const removeAllItems = () => {
        dispatch({type: "delete_items"})
      }

    return (
        <div className="item-delete">
            {itemlist.length > 0 ? <FaTrashAlt onClick={removeAllItems} /> : null}
        </div>
    )
}

function mapStateToPropsDeleteItem(state) {
    return { itemlist: state };
}
const ConnetedDeleteItem = connect(mapStateToPropsDeleteItem)(DeleteItem);

export default ConnetedDeleteItem;