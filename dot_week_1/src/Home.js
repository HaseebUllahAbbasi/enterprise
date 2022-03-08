import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container mt-5">
            <h1>
               Home Screen 
            </h1>
            <Link to={"/products"}>
             Products
            </Link>

        </div>
    )
}
export default Home;