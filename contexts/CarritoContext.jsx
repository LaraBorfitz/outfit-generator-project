import { createContext, useState, useEffect } from "react";

const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (item) => {
    console.log("EL ITEM RECIBIDO ES: ", item);

    setCart((prevCart) => {
      const itemRepetido = prevCart.find(
        (cartItem) => cartItem._id === item._id
      );

      if (itemRepetido) {
        return prevCart.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, cantidad: cartItem.cantidad + 1 }
            : cartItem
        );
      }

      return [...prevCart, { ...item, cantidad: 1 }];
    });
  };

  const state = {
    cart,
    handleAddToCart,
    setCart,
    CarritoContext,
  };

  return (
    <CarritoContext.Provider value={state}>{children}</CarritoContext.Provider>
  );
};

export { CarritoContext, CarritoProvider };
