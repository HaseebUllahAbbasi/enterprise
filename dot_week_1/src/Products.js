import data_home from "./home_data";
import Product from "./Product";

import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from "react";
import { getAllProducts } from "./actions/productAction";
const Products = () => 
{
    const dispatch = useDispatch();
    useEffect(()=>
    {
        dispatch(getAllProducts())

    },[dispatch])
    const {  products} = useSelector(state=> state.productReducer);
    return (
        <div className="container mt-5">
            <div className="row">
                {

                    products.map(item => <Product key={item.id} item={item} />)


                }
            </div>

        </div>

    )

}
export default Products;