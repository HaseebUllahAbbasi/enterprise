import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "./actions/productAction";

const Product = (props) => {
  const dispatch = useDispatch();
  const { item } = props;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
     
      whileHover={{
        scale: 1.1,
        textShadow: "0px 0px 10px rgb(255,255,255)",
        boxShadow: "0px 0px 10px rgb(255,255,255)",
      }}
      // initial={{opacity:"0"}}
      // animate={{opacity:"1"}}
      // transition={{delay:"0.1", duration:"6",type:"tween", stiffness:120 }}

      className="col-md-4 col-lg-3 col-xs-12 col-sm-6 mb-3 "
    >
      <div className="card p-2" style={{ height: "100%" }}>
        <div className="text-center my-1">
          <motion.img
            whileHover={{ scale: 1.2 }}
            src={item.imgSrc}
            className="card-img-top"
            style={{ height: "120px", width: "120px" }}
            alt="Alternative Data"
          ></motion.img>
          <img />
        </div>
        <div className="card-body" style={{ backgroundColor: "ButtonFace" }}>
          <h5 className="card-title">{item.name}</h5>
          <div className="card-body ">
            <div>Available Stock : {item.present}</div>
            <div className="d-flex justify-content-between">
              <Link to={`/product/${item.id}`}>
                <button className="btn btn-outline-success ">
                  View Details
                </button>
              </Link>  
              <motion.button
                whileHover={{ scale: 1.2 }}
                className="btn btn-outline-primary"
                onClick={() => { 
                  if (item.present >  0) dispatch(addToCart(item.id));
                  else alert("no stock avaiable for this account");
                }}
              >
                Add to Card
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Product;
