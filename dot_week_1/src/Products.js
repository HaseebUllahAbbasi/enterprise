import Product from "./Product";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setAllProducts } from "./actions/productAction";
import { motion } from "framer-motion";
const Products = () => {
  const [selectedId, setSelectedId] = useState(null);

  const { products } = useSelector((state) => state.productReducer);
  return (
    <motion.div
      className="container mt-5"
      animate={{ y: 30 }}
      transition={{
        type: "spring",
        delay: 0.01,
        duration: 2,
        stiffness: 190,
      }}
    >
      <div className="row">
        {products.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </motion.div>
  );
};
export default Products;
