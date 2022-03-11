import { ADD_ALL } from "../constants/actionDefined"
// import data_home from "../home_data"

export const productReducer = (state = {products : []} ,action) =>
{
    switch(action.type)
    {
        case  ADD_ALL:
            return {...state, products:[...action.payload.data ]};
    default: return state}
} 