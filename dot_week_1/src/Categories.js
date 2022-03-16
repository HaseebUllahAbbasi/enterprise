import { Link } from "react-router-dom";
import {Outlet} from 'react-router'
const  Categories = ()=>
{
    const cat_list = ['cat_1','cat_2','cat_3','cat_4'];
    return (
        <div className="container">
            <p className="display-3 text-center">
              Categories  Page
            </p>
            <ul>
                {
                   <li>
                         <Link to={`/category/all`}>  All </Link>
                   </li>
                }
            {
                cat_list.map((item,i)=><li key={i}>  <Link to={`/category/${item}`}>  {item} </Link> </li> )
            }
            </ul>
            <Outlet/>

        </div>

    )
}
export default Categories;