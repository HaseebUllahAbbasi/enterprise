import { useState } from "react";
// import { Document, Page } from "react-pdf";
import { motion } from "framer-motion";

import { useDispatch, useSelector } from "react-redux";

const Receipt = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.productReducer);
  console.log(cart);
  if (cart && cart.length != 0)
    return (
      <motion.div
        animate={{ y: 20 }}
        transition={{ type: "spring", stiffness: 1000 }}
        >
        <div>
          <div className="text-center mt-2">
            <button
              className="btn btn-success"
              onClick={() => {
                alert("print in process");
              }}
            >
              Print
            </button>
          </div>
          <div className="m-1 p-1">
            <table className="table table-dark mt-3">
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
          </div>
        </div>
      </motion.div>
    );
  else return <>No Items Purchased yet</>;
};
export default Receipt;
