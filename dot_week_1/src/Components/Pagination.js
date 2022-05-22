import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Pages from "./Pages";
import Paginate from "./Paginate";

const Pagination = () => {
  const [pageData, setData] = useState({
    curentPage: 1,
    pageSize: 10,
  });
  const pageChange = (page) => {
    setData({ ...pageData, curentPage: pageData.curentPage + 1 });
  };
  const [posts, setPosts] = useState([]);
  useEffect(async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await data.json();
    // console.log(json);
    setPosts(json);
  }, []);
  const posts_page = Paginate(posts, pageData.curentPage, pageData.pageSize);

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          {posts_page.map((page, index) => (
            // <motion.div
            //   whileHover={{
            //     scale: 1.06,
            //     textShadow: "0px 0px 10px rgb(255,255,255)",
            //     boxShadow: "0px 0px 10px rgb(255,255,255)",
            //   }}
            //   className="col-md-4 col-lg-3 my-5"
            //   key={index}
            // >
            //   <span className="card" style={{ height: "50vh" }}>
            //     <div className="card-body" style={{ height: "" }}>
            //       <h5 className="cart-title "> {page.title}</h5>
            //       <div className="cart-text">{page.body} </div>
            //       <div className="text-center">
            //         <button className="btn btn-primary my-3"> View Post</button>
            //       </div>
            //     </div>
            //   </span>
            // </motion.div>
            <motion.div className="col-md-6 my-3"
               whileHover={{
                scale: 1.06,
                textShadow: "0px 0px 10px rgb(255,255,255)",
                boxShadow: "0px 0px 10px rgb(255,255,255)",
              }}
            
            
            >
                <div class="card text-center">
            <div class="card-header">
              Featured
            </div>
            <div class="card-body">
              <h5 class="card-title">{page.title}</h5>
              <p class="card-text">{page.body}</p>
              <a href="#" class="btn btn-primary">View Post</a>
            </div>
            <div class="card-footer text-muted">
              2 days ago
            </div>
          </div>
            </motion.div>
          ))}
        </div>
        <div className="col-4 offset-4 my-3 mb-5">
        <Pages
        itemsCount={posts.length}
        pageSize={10}
        onPageChange={pageChange}
      />
        </div>
      </div>
              
    </React.Fragment>
  );
};
export default Pagination;
