import { Link } from "react-router-dom";
import { useParams } from "react-router";
import data_home from "./home_data";
const ProductDetail = (props) => {
    const { id } = useParams();
    const product = data_home.filter(item => item.id == id)
    return (
        <div className="col-md-6 col-sm-12 offset-md-3 mt-5">
            <div className="card">
                <div className="card-header">
                    <div className="text-center">
                        <div className="display-6">
                            {
                                product[0].name
                            }
                        </div>
                        <img src={product[0].imgSrc} alt={"Simple Data"}>
                        </img>

                    </div>
                </div>
                <div className="card-body">
                    <div>
                        {
                            product[0].desc

                        }
                    </div>
                    <div className="text-center">
                        <div>
                            Discounted Price : {
                                product[0].price
                            }
                        </div>

                        <div style={{ textDecoration: "line-through" }}>
                            Actual Price : {
                                product[0].del_price
                            }
                        </div>
                        <div>
                            Available : {
                                product[0].present
                            }
                        </div>

                        <div>
                            Qty : {
                                product[0].qty
                            }
                        </div>



                    </div>
                </div>


            </div>
        </div>

    )

}
export default ProductDetail;