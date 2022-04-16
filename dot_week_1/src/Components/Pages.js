import React from "react";
import _ from "lodash";
import { motion } from "framer-motion";
const Pages = (props) => {
  const { itemsCount, pageSize } = props;
    
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount == 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <React.Fragment>
      <nav>
        <ul className="pagination">
          {
              pages.map(page=> 
              
            <motion.li  whileHover={{scale:1.4, originX:0}} key={page} onClick={props.onPageChange} className="page-item">

              <a className="page-link">
                  {page}
              </a>
            </motion.li>
            )
          }
        </ul>
      </nav>
    </React.Fragment>
  );
};
export default Pages;
