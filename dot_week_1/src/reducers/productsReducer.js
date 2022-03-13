import {
  ADD_ALL,
  ADD_PRODUCT,
  DECREASE_PRODUCT,
  GET_ALL,
  INCREASE_PRODUCT,
  REMOVE_PRODUCT,
} from "../constants/actionDefined";
// import data_home from "../home_data"

export const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ADD_ALL:
      return { ...state, products: [...action.payload.data], cart: [] };
      case GET_ALL:
        return { ...state };
        
    case ADD_PRODUCT: {
      const id = action.payload;
      const products = [...state.products];
      const cart = [...state.cart];
      // decreasing the amount of the products

      if (products[id - 1].present > 0)
        products[id - 1].present = products[id - 1].present - 1;

      //finding the
      const index = cart.findIndex((item) => item.id == id);
      let newCart = [];
      if (index == -1) 
      {
        products[id - 1].qty = 1;
        cart.push(products[id - 1]);
      } else
        newCart = cart.map((item) => {
          if (item.id === id) {
            item.qty += 1;

          }
          return item;
        });

      //     console.log(state)
      //   return { ...state, ...cart, ...products };
      if (index == -1) return { ...state, products, cart: cart };
      else return { ...state, products, cart: newCart };
    }
    case INCREASE_PRODUCT: {
      const id = action.payload;
      const products = [...state.products];
      const cart = [...state.cart];

      if (products[id - 1].present > 0)
        products[id - 1].present = products[id - 1].present - 1;

      cart.map((item) => {
        if (item.id === id) {
          item.qty += 1;
          item.present-=1;
        }
        return item;
      });
      return { ...state, products, cart };
    }
    case DECREASE_PRODUCT: {
      const id = action.payload;
      const products = [...state.products];
      const cart = [...state.cart];

      const index = cart.findIndex((item) => item.id == id);
      let newCart = [];
       
        cart[index].qty -= 1;
       

      products[id - 1].present = products[id - 1].present + 1;
       return { ...state, products, cart };
       
    }
    case REMOVE_PRODUCT: {
      const id = action.payload;
      const products = [...state.products];
      const cart = [...state.cart];
      let newCart = []; 
      const index = cart.findIndex((item) => item.id == id);
      products[id - 1].present = products[id - 1].present + cart[index].qty;

      products[id - 1].qty = 0;
        newCart = cart.filter((item) => item.id != id);
      
      
        return { ...state, products, cart: newCart };
    }

    default:
      return state;
  }
};
