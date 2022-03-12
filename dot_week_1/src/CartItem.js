import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "./actions/productAction";

const CartItem = (props) => 
{
    const dispatch =  useDispatch();
    const { item } = props;
    return (
        <div className="col-md-4 col-lg-3 col-xs-12 col-sm-6 mb-3 ">

            <div className="card" style={{ height: "40vh" }}>
                <div className="text-center my-1">
                    <img src={item.imgSrc} className="card-img-top" style={{ height: "150px", width: "150px" }} alt="Alternative Data" />
                </div>
                <div className="card-body" style={{ backgroundColor: "ButtonFace" }}>
                    <h5 className="card-title">{item.name}</h5>
                    <div className="card-body ">
                        <div className="d-flex justify-content-between">

                            <Link to={`/product/${item.id}`}>
                            <button className="btn btn-outline-success ">
                                View Details
                            </button>
                            
                            </Link>
                            <button className="btn btn-outline-primary" onClick={()=>
                            {
                                // dispatch(addToCart(item.id));
                                    // else alert("no stock avaiable for this account");
                                
                            }}>
                               +
                            </button>
                            <button className="btn btn-outline-primary" onClick={()=>
                            {
                                // dispatch(addToCart(item.id));
                                    // else alert("no stock avaiable for this account");
                                
                            }}>
                               -
                            </button>
                            <button className="btn btn-outline-primary" onClick={()=>
                            {
                                // dispatch(addToCart(item.id));
                                    // else alert("no stock avaiable for this account");
                                
                            }}>
                               remove
                            </button>

                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
export default CartItem;