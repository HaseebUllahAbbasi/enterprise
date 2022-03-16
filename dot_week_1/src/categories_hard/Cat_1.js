import { motion } from "framer-motion";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { createSearchParams, useSearchParams } from "react-router-dom";
import Product from "../Product";

const Cat_1 = () => {
  const { cat } = useParams();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);

  const [searchParams, setSearchParams] = useSearchParams({});

  // const [creatParams,setCreate] = createSearchParams();

  const { products } = useSelector((state) => state.productReducer);
  return (
    <motion.div
      className="container mt-5"
      animate={{ y: 30 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="row">
        <div className="container">
          <div className="col-md-4 col-sm-12 ">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={(e) => {
                  setMinPrice(e.target.value);
                }}
              />
              <div class="input-group-append">
                <motion.button
                  className="btn btn-danger"
                  onClick={() => {
                    /**
                     * if we want to multiple  filters   then we have to set the searchpParam with   set method and then assign it to the setSearchParams
                     * */
                    // setSearchParams(creatParams({ hi: "bye"  }));

                    searchParams.set("minPrice", minPrice);
                    setSearchParams(searchParams);
                    /**
                     * if we want to set only one filter at at time then we have to direct set the setSearchParams
                     * */
                    // setSearchParams(creatParams({ hi: "bye"  }));
                  }}
                >
                  Set Min Price
                </motion.button>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={(e) => {
                  setMaxPrice(e.target.value);
                }}
              />
              <div class="input-group-append">
                <motion.button
                  className="btn btn-danger"
                  onClick={() => {
                    /**
                     * if we want to multiple  filters   then we have to set the searchpParam with   set method and then assign it to the setSearchParams
                     * */
                    // setSearchParams(creatParams({ hi: "bye"  }));

                    searchParams.set("maxPrice", maxPrice);
                    setSearchParams(searchParams);
                    /**
                     * if we want to set only one filter at at time then we have to direct set the setSearchParams
                     * */
                    // setSearchParams(creatParams({ hi: "bye"  }));
                  }}
                >
                  Set Max Price
                </motion.button>
              </div>
            </div>
            
          </div>

        
        </div>
        {
          products.map((item) =>populateData(item,minPrice,maxPrice,cat))
          }
      </div>
    </motion.div>
  );
};
function populateData(item, minPrice,maxPrice, cat) {
  if (minPrice == 0 && maxPrice == 10000) 
  {
   
    if(cat=="all")
    return <Product key={item.id} item={item} />;    
    else if (item.cateogryName.toLowerCase() == cat)
      return <Product key={item.id} item={item} />;
      
  } else 
  {
    if(cat=="all" && item.price < minPrice)
    return <Product key={item.id} item={item} />;  
    else if (item.cateogryName.toLowerCase() == cat && item.price > minPrice)
      return <Product key={item.id} item={item} />;
  }
}
export default Cat_1;
