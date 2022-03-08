import data_home from "./home_data";
import Product from "./Product";

const Products = () => {

    return (
        <div className="container mt-5">

            <div className="row">
                {
                    data_home.map(item => <Product key={item.id} item={item} />)
                }
            </div>

        </div>

    )

}
export default Products;