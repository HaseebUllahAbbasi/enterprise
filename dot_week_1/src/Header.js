import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

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
              <li className="nav-item">
                <Link to={"/"} className="nav-link " aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/products"}
                  className="nav-link "
                  aria-current="page"
                >
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/about"} className="nav-link " aria-current="page">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/cart"} className="nav-link " aria-current="page">
                  Cart
                </Link>
              </li>


              <li className="nav-item">
                <Link to={"/receipt"} className="nav-link" aria-current="page">
                  Receipt
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/category"} className="nav-link" aria-current="page">
                  Categories
                </Link>
              </li>
              
              
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
                  <li>
                    <Link to={"/dot_prc"} className="dropdown-item" >
                    dot_prc
                    </Link>
                  </li>
                  <li>
                  <Link to={"/crud"} className="dropdown-item" >
                    Crud Basic
                    </Link>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
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
