import { ADD_ALL, ADD_PRODUCT } from "../constants/actionDefined";
// import data_home from "../home_data"

export const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ADD_ALL:
      return { ...state, products: [...action.payload.data], cart: [] };
    case ADD_PRODUCT: {
      const id = action.payload;
      console.log(id);
      console.log(state)
      const products = [...state.products];
      const cart = [...state.cart];
      // decreasing the amount of the products
      if (products[id - 1].present > 0)
      products[id - 1].present = products[id - 1].present - 1;
      //finding the 
      const index = cart.findIndex((item) => item.id == id);
      let newCart = [];
      if (index == -1) { cart.push(products[id - 1]); console.log("added prod ")}
      else
      newCart = cart.map((item) => {
          if (item.id === id) {
            item.qty += 1;
          }
          return item;
        });
        

     
      //     console.log(state)
      //   return { ...state, ...cart, ...products };
        if(index==-1)
      return {...state,products, cart:cart};
        else
        return {...state,products, cart:newCart};

    }

    default:
      return state;
  }
};
