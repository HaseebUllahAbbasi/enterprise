import data_home from "./home_data";
import Product from "./Product";
import store from './store';

const Products = () => {
    const data = store.getState();
    console.log(data);
    return (
        <div className="container mt-5">
            <div className="row">
                {
                    // products.map(item => <Product key={item.id} item={item} />)
                }
            </div>

        </div>

    )

}
export default Products;