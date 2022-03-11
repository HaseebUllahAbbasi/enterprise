import { ADD_ALL, ADD_PRODUCT } from "../constants/actionDefined";
// import data_home from "../home_data"

export const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ADD_ALL:
      return { ...state, products: [...action.payload.data] };
    case ADD_PRODUCT:
        {
            const id =  action.payload;
            console.log(id);
            const products = [...state.products];
            console.log(products[id-1]);
        }
      
      default:
      return state;
  }
};
