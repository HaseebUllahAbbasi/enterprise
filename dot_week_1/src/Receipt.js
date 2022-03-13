import { useState } from 'react';
import { Document, Page } from 'react-pdf';

import { useDispatch, useSelector } from "react-redux";

const Receipt = () => {
    
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.productReducer);

  if (cart && cart.length != 0)
    return (
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
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr className="table-dark" key={item.id}>
                  {" "}
                  <td> {item.id} </td> <td> {item.name} </td>{" "}
                  <td> <img src={item.imgSrc}  alt="No Data"></img> </td>{" "}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  else return <>No Items Purchased yet</>;
};
export default Receipt;
