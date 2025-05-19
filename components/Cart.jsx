import { useState } from "react";
import Menu from "@mui/material/Menu";
import "../components/Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slices/cartSlice";
import BtnGnrc from "./BtnGnrc";

export default function Cart() {
  const [openModal, setOpenModal] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
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
        style={{ marginTop: "10px" }}
        id="cart-menu"
        anchorEl={openModal}
        open={openModal}
        onClose={handleClose}
      >
        <div style={{ padding: "20px", minWidth: "300px" }}>
          <h3>Your Bag</h3>
          {cart.length > 0 ? (
            cart.map((item) => (
              <div
                key={item._id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  alignItems: "center",
                  gap: "0.9rem",
                  marginBottom: "10px",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                }}
              >
                <p>{item.nombre}</p>
                <img
                  src={item.imagenUrl}
                  style={{
                    maxWidth: "80px",
                    justifySelf: "end",
                    objectFit: "cover",
                    width: "100px",
                    height: "100px",
                  }}
                  alt={item.nombre}
                />
                <p>{item.precio}</p>

                <BtnGnrc
                  txt="Remove"
                  onClick={() => dispatch(removeFromCart(item))}
                />
              </div>
            ))
          ) : (
            <p>Your bag is empty</p>
          )}
        </div>
      </Menu>
    </>
  );
}
