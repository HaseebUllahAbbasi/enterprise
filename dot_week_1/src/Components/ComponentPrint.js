import React from "react";
import ReactToPrint from "react-to-print";
class ComponentToPrint extends React.Component {
  render() {
    const cart = this.props.cart;
    return (
      <table className="table table-dark mt-3 p-2">
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
            <td style={{fontWeight:"bolder"}}>OverAll Total</td>
            <td style={{fontWeight:"bolder"}}>
              {cart.reduce((total, item) => item.price * item.qty + total, 0)}$
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

class PrintingComponent extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => (
            <a>
              <button
                className="btn btn-success"
                onClick={() => {
                  alert("print in process");
                }}
              >
                Print
              </button>
            </a>
          )}
          content={() => this.componentRef}
        />
        <ComponentToPrint
          cart={this.props.cart}
          ref={(el) => (this.componentRef = el)}
        />
      </div>
    );
  }
}

export default PrintingComponent;
