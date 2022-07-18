import {NavLink,Link} from 'react-router-dom';
function Navbar()
{
    return<>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid ">
                <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <NavLink to="/" style={{textDecoration:"none"}}  className="nav-link">Home</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/signup" style={{textDecoration:"none"}} className="nav-link">Sign up</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/signin" style={{textDecoration:"none"}} className="nav-link">Sign in</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/logout" style={{textDecoration:"none"}} className="nav-link">Logout</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/userdata" style={{textDecoration:"none"}} className="nav-link">User Data</NavLink>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
    </>
}
export default Navbar