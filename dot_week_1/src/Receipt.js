import { useState } from "react";
import { motion } from "framer-motion";

import { useDispatch, useSelector } from "react-redux";

import PrintingComponent from "./Components/ComponentPrint";

const Receipt = () => {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.productReducer);
  // console.log(cart);
  if (cart && cart.length != 0)
    return (
      <motion.div
        animate={{ y: 20 }}
        transition={{ type: "spring", stiffness: 1000 }}
      >
        <div>
          <div className="text-center mt-2 p-4">
          <PrintingComponent cart={cart} />

            {/* <button
              className="btn btn-success"
              onClick={() => {
                alert("print in process");
              }}
            >
              Print
            </button> */}
          </div>
          <div className="m-1 p-1">
            {/* <table className="table table-dark mt-3">
              <thead>
                <tr className="table-dark">
                  <td className="table-dark">Id</td>
                  <td className="table-dark">Item Name </td>
                  <td className="table-dark">Picture</td>
                  <td className="table-dark">Price</td>
                  <td className="table-dark">Quantity</td>
                  <td className="table-dark">Total</td>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr className="table-success" key={item.id}>
                    <td> {item.id} </td> <td> {item.name} </td>{" "}
                    <td>
                      <img src={item.imgSrc} height="100px" alt="No Data"></img>{" "}
                    </td>
                    <td> {item.price}$ </td>
                    <td> {item.qty} </td>
                    <td style={{ fontStyle: "oblique", fontWeight: "bolder" }}>
                      {" "}
                      {item.qty * item.price}${" "}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={4}></td>
                  <td>OverAll Total</td>
                  <td>
                    {cart.reduce(
                      (total, item) => item.price * item.qty + total,
                      0
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
           */}
          </div>
        </div>
        
      </motion.div>
    );
  else
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
        className={"display-2 text-center"}
      >
        No Items Purchased yet
      </motion.div>
    );
};
export default Receipt;
