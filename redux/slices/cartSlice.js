import { createSlice } from '@reduxjs/toolkit';


// Estado inicial del slice
const initialState = {
    cart: [],
  };

  const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addToCart: (state, action) => {
        
        state.cart.push(action.payload);
        localStorage.setItem("cart", JSON.stringify(state.cart));
      },
      removeFromCart: (state, action) => {
        state.cart = state.cart.filter(
          (item) => item._id !== action.payload._id
        );
        localStorage.setItem("cart", JSON.stringify(state.cart));
      },
    },
  });

  export const { addToCart, removeFromCart } = cartSlice.actions;
  export default cartSlice.reducer;



    /* paylod  removeFromCart(item) 
 action.payload  {
    "id": "1",
    "nombre": "Remera",
    "talle": "M",
    "color": "Rojo",
    "categoria": "Parte de arriba",
    "subcategoria": "Remera",
    "textura": "Algodón",
    "estacion": "Primavera",
    "ocasion": "Trabajo",
    "imageURL": "https://example.com/image.jpg"
  }


  paylod:  removeFromCart(item.id)
action.payload  "afa2lkjf3l"
  
  */