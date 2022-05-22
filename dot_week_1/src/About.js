import { motion } from "framer-motion";

const About = () => {
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
      className="display-1 text-center"
    >
      {" "}
      This is About Page Lorem34 This is About Page Lorem34This is About Page
      Lorem34This is About Page Lorem34This is About Page Lorem34
    </motion.div>
  );
};
export default About;
