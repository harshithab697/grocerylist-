import './App.css';
import { FaRegCheckCircle } from 'react-icons/fa';
import { FaRegCircle } from 'react-icons/fa';

function Item(props) {

   const toggle = (
       ()=>{
           props.itemdetails.is_selected = !props.itemdetails.is_selected;
       }
   )


    return (
        <>
        <div className='item-name'onClick={toggle} >
            {props.itemdetails.is_selected ? (
                <>
                    <FaRegCheckCircle />
                    <span className={toggle?"completed":""}>{props.itemdetails.itemName}</span>
                </>
            ) : (
                <>
                    <FaRegCircle />
                    <span>{props.itemdetails.itemName}</span>
                </>
            )}
        </div>
        <div className='quantity'>
        <span> {props.itemdetails.quantity} </span>
        </div>
        </>
    )
}
export default Item;