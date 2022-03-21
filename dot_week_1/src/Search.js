import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Product from "./Product";

import { setAllProducts } from "./actions/productAction";
import { useParams } from "react-router";
const Search = () => 
{
    
  const { term } = useParams();
  const { products } = useSelector((state) => state.productReducer);
  return (
    <div className="container mt-5">
      <div className="row">
        {term != undefined
          ? products.map(
              (item) =>
                item.name.toLowerCase().match(term.toLowerCase()) != null && (
                  <Product key={item.id} item={item} />
                )
            )
          : products.map((item) => <Product key={item.id} item={item} />)}
      </div>
    </div>
  );
};
export default Search;
