import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ItemAnimate from "./HOC/ItemAnimate";

const Header = () => 
{
  const navigate = useNavigate();
  const [searchTerm,setTerm] = useState(""); 
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <motion.li className="nav-item" whileHover={{scale:1.1, originX:0}}>
                              <Link to={"/"} className="nav-link " aria-current="page">
                  Home
                </Link>
              </motion.li>
              <motion.li className="nav-item" whileHover={{scale:1.1, originX:0}}>
              
                <Link
                  to={"/products"}
                  className="nav-link "
                  aria-current="page"
                >
                  Products
                </Link>
              </motion.li>

              <motion.li className="nav-item" whileHover={{scale:1.1, originX:0}}>
                <Link to={"/about"} className="nav-link " aria-current="page">
                  About
                </Link>
              </motion.li>

              <motion.li className="nav-item" whileHover={{scale:1.1, originX:0}}>
                <Link to={"/cart"} className="nav-link " aria-current="page">
                  Cart
                </Link>
              </motion.li>


              <motion.li className="nav-item" whileHover={{scale:1.1, originX:0}}>
                <Link to={"/receipt"} className="nav-link" aria-current="page">
                  Receipt
                </Link>
              </motion.li>
              <motion.li className="nav-item" whileHover={{scale:1.1, originX:0}}>
              
                <Link to={"/category"} className="nav-link" aria-current="page">
                  Categories
                </Link>
              </motion.li>
              
              
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <motion.li  whileHover={{scale:1.1, originX:0}}>
                <Link to={"/dot_prc"} className="dropdown-item" >
                    dot_prc
                    </Link>
                  </motion.li>
                  <motion.li  whileHover={{scale:1.1, originX:0}}>
                
                  <Link to={"/crud"} className="dropdown-item" >
                    Crud Basic
                    </Link>
                  </motion.li>
                  <motion.li  whileHover={{scale:1.1, originX:0}}>
                
                  <Link to={"/form"} className="dropdown-item" >
                    Form
                    </Link>

                  </motion.li>
                  
                  
                  <motion.li  whileHover={{scale:1.1, originX:0}}>
                
                <Link to={"/pagination"} className="dropdown-item" >
                    Pagination 
                  </Link>

                </motion.li>
                
                
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <motion.li  whileHover={{scale:1.1, originX:0}}>
                
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </motion.li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
            <form className="d-flex" onSubmit={(e)=>{
                e.preventDefault();
                navigate(`/search/${searchTerm}`)
                console.log(e)
            }}>
              <input
              value={searchTerm}
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e)=>
                {
                  setTerm(e.target.value);
                }}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
