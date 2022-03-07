import data_home from "./home_data";
import Product from "./Product";

const Products = () => {

    return (
        <div className="container">

            <div className="row">
                {
                    data_home.map(item => <Product item={item} />)
                }
            </div>

        </div>

    )

}
export default Products;