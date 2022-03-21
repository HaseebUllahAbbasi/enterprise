import { motion } from "framer-motion";
import React from "react";

const ItemAnimate = (MyComponent,scale)=>
{
    
    return     (
        <motion.li className="nav-item" whileHover={{scale:scale, originX:0}}>
                <MyComponent/>
        </motion.li>
    )

};
export default ItemAnimate;