import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToCart,
  decreaseProduct,
  increaseProduct,
  removeProduct,
} from "./actions/productAction";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { item } = props;
  return (
    <div className="col-md-4 col-lg-3 col-xs-12 col-sm-6 mb-3 ">
      <motion.div
        whileHover={{
          scale: 1.06,
          textShadow: "0px 0px 10px rgb(255,255,255)",
          boxShadow: "0px 0px 10px rgb(255,255,255)",
        }}
      >
        <div className="card" style={{ height: "100%", margin: "15px" }}>
          <div className="text-center my-1">
            <img
              src={item.imgSrc}
              className="card-img-top"
              style={{ height: "150px", width: "150px" }}
              alt="Alternative Data"
            />
          </div>
          <div className="card-body" style={{ backgroundColor: "ButtonFace" }}>
            <h5 className="card-title">{item.name}</h5>
            <div className="card-body ">
              <div>Items Added to Cart : {item.qty}</div>
              <div>More Available : {item.present}</div>

              <div className="d-flex justify-content-between">
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    textShadow: "0px 0px 8px rgb(255,255,255)",
                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                >
                  {" "}
                  <Link to={`/product/${item.id}`}>
                    <button className="btn btn-outline-success m-1">
                      View
                    </button>
                  </Link>
                </motion.div>

                <motion.div
                  whileTap={{
                    scale: 1.3,
                  }}
                  whileHover={{
                    scale: 1.2,
                    textShadow: "0px 0px 8px rgb(255,255,255)",
                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                  className=""
                >
                  <button
                    className="btn btn-outline-primary m-1"
                    onClick={() => {
                      if (item.present > 0) dispatch(increaseProduct(item.id));
                      else alert("no stock avaiable for this account");
                    }}
                  >
                    +
                  </button>
                </motion.div>
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    textShadow: "0px 0px 8px rgb(255,255,255)",
                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                >
                  <button
                    className="btn btn-outline-primary m-1"
                    onClick={() => {
                      if (item.qty > 1) dispatch(decreaseProduct(item.id));
                      else {
                        dispatch(removeProduct(item.id));
                      }
                    }}
                  >
                    -
                  </button>
                </motion.div>

                <motion.div
                  whileHover={{
                    scale: 1.2,
                    textShadow: "0px 0px 8px rgb(255,255,255)",
                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                >
                  <button
                    className="btn btn-outline-danger m-1"
                    onClick={() => {
                      dispatch(removeProduct(item.id));
                    }}
                  >
                    remove
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default CartItem;
