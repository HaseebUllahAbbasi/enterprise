import { Link } from "react-router-dom";

const Product = (props) => {
    const { item } = props;
    return (
        <div className="col-md-4 col-lg-3 col-xs-12 col-sm-6 mb-3 ">

            <div class="card" style={{ height: "40vh" }}>
                <div className="text-center my-1">
                    <img src={item.imgSrc} class="card-img-top" style={{ height: "150px", width: "150px" }} alt="Alternative Data" />
                </div>
                <div class="card-body" style={{ backgroundColor: "ButtonFace" }}>
                    <h5 class="card-title">{item.name}</h5>
                    <p class="card-body ">
                        <div className="d-flex justify-content-around">

                            <Link to={`/product/${item.id}`}>
                            <button className="btn btn-outline-success ">
                                View Details
                            </button>
                            
                            </Link>
                            <button className="btn btn-outline-primary" onClick={()=>
                            {

                                    
                            }}>
                                Add to Card
                            </button>

                        </div>
                    </p>
                </div>
            </div>

        </div>

    )

}
export default Product;