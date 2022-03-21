// import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useParams } from "react-router";
import data_home from "./home_data";

const ProductDetail = (props) => {
  const { id } = useParams();
  const product = data_home.filter((item) => item.id == id);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.01,
        duration: 0.5,
        stype: "spring",
        stiffness: 120,
      }}
      className="col-md-6 col-sm-12 offset-md-3 mt-5"
    >
      <div className="card">
        <div className="card-header">
          <div className="text-center">
            <div className="display-6">{product[0].name}</div>
            <motion.img
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 10px rgb(255,255,255)",
                boxShadow: "0px 0px 10px rgb(255,255,255)",
              }}
              src={product[0].imgSrc}
              alt={"Simple Data"}
            ></motion.img>
          </div>
        </div>
        <div className="card-body">
          <div>{product[0].desc}</div>
          <div className="text-center">
            <div>Discounted Price : {product[0].price}</div>

            <div style={{ textDecoration: "line-through" }}>
              Actual Price : {product[0].del_price}
            </div>
            <div>Available : {product[0].present}</div>

            <div>Qty : {product[0].qty}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default ProductDetail;
