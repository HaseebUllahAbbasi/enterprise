import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import Product from "./Product";
import { Document, Page } from 'react-pdf';


const Cart = ()=>
{
    const dispatch =  useDispatch();
    const {cart} = useSelector(state=> state.productReducer);
    return(
        <div className="row">

                {
                    cart.length ? cart.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />): <div className="display-1">
                        No Items
                        </div> 
                }
        </div>

    )

    
}
export default Cart;