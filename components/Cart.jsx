import { useState } from "react";
import Menu from "@mui/material/Menu";
import "../components/Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slices/cartSlice";

export default function Cart() {
  const [openModal, setOpenModal] = useState(false);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setOpenModal(event.currentTarget);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div style={{ cursor: "pointer" }} onClick={handleClick}>
        BAG
      </div>
      
      <Menu
        style={{ marginTop: 10 }}
        id="cart-menu"
        anchorEl={openModal}
        open={openModal}
        onClose={handleClose}
      >
        <div style={{ padding: '20px', minWidth: '300px' }}>
          <h3>Your Cart</h3>
         {cart.length > 0 ? cart.map((item) => (
           <div key={item._id} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc' }} >
             <p>{item.nombre}</p>
             <p>{item.precio}</p>
             <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
           </div>
         )) : <p>Your cart is empty</p>}
        </div>
      </Menu>
    </>
  );
}
