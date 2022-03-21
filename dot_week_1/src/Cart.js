import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import Product from "./Product";


const Cart = ()=>
{
    
    const dispatch =  useDispatch();
    const {cart} = useSelector(state=> state.productReducer);
    return(
        <div className="row">

                {
                    cart.length ? cart.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />): <motion.div 
                    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.01,
        duration: 0.5,
        stype: "spring",
        stiffness: 120,
      }}
                    className="display-1 text-center">
                        No Items
                        </motion.div> 
                }
        </div>

    )

    
}
export default Cart;