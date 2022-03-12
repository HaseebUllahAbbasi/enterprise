import { ADD_ALL, ADD_PRODUCT } from "./actionType";
import data_home from "./home_data";

function reducer(state = {}, action) 
{
    switch (action.type) {
        case ADD_PRODUCT:
            {
                return state;
            }
            case ADD_ALL:
                {
                    console.log("data collected from redux");

                    return {products:[...data_home]};


                    
                }
        default:
            return state;
    }

}
export default reducer;