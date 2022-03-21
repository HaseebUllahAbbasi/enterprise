import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const Counter = () => {
  const [number, setNum] = useState(0);
  useEffect(() => { console.log("mounter")}, []);
  // it will be called as the compoment did mount

  useEffect(() => { console.log("updated ");
  return () => {
    console.log("unmounted");// will unmount
  };
}, [number]);
  // it will be called as the compoment did update

  
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5, duration:3}} className="col-md-4 offset-md-4 col-sm-12 col-xs-12">

<div className="display-4">
      Counter Practice With UseEffect
      <motion.div transition={{stype:"keyframes", stiffness:190 }} className="text-center mt-5">number is {number}</motion.div>
      <div className="row p-5">
            <motion.button whileHover={{scale:1.2}} className="btn btn-info m-3" onClick={()=>
            {
                setNum(number+1);

            }}>
                +
            </motion.button>
            <motion.button whileHover={{scale:1.2}} className="btn btn-info m-3" onClick={()=>
            {
                setNum(number-1);
                
            }}>
                -
            </motion.button>
            
      </div>
    </div>
    </motion.div>
  );
};
export default Counter;
