import { Link } from "react-router-dom";
import { Outlet } from "react-router";
import { motion } from "framer-motion";

const Categories = () => {
  const cat_list = ["cat_1", "cat_2", "cat_3", "cat_4"];
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
      className="container"
    >
      
      <p className="display-3 text-center">Categories Page</p>
      <ul>
        {
          <motion.li whileHover={{scale:1.4, originX:0 }}>
            <Link to={`/category/all`}> All </Link>
          </motion.li>
        }
        {cat_list.map((item, i) => (
          <motion.li whileHover={{scale:1.4 ,originX:0}} key={i}>
            {" "}
            <Link to={`/category/${item}`}> {item} </Link>{" "}
          </motion.li>
        ))}
      </ul>
      <Outlet />
    </motion.div>
  );
};
export default Categories;
