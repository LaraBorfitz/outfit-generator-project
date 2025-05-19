import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppContext } from "../contexts/FunctionContext";
import { addToCart } from "../redux/slices/cartSlice";
import "./Swiper1New.css";

const Swiper1New = () => {
  const { publicClothes } = useAppContext();
  const [index, setIndex] = useState(0);
  const [clothes, setClothes] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (publicClothes && publicClothes.length > 0) {
      setClothes(publicClothes);
    }
  }, [publicClothes]);

  // Si no hay ropa disponible, mostrar un mensaje de carga
  if (!clothes || clothes.length === 0) {
    return <div className="nc-loading">Cargando productos...</div>;
  }

  const selectedItem = clothes[index];

  // Funciones para navegar entre productos
  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      // Si estamos en el primer producto, volvemos al último
      setIndex(clothes.length - 1);
    }
  };

  const handleNext = () => {
    if (index < clothes.length - 1) {
      setIndex(index + 1);
    } else {
      // Si estamos en el último producto, volvemos al primero
      setIndex(0);
    }
  };

  // Función para añadir al carrito
  const handleAddToCart = () => {
    dispatch(addToCart(selectedItem));
  };

  // Crear un array de tallas para mostrar (puedes ajustar esto según tu estructura de datos)
  const tallas = selectedItem.talle
    ? [selectedItem.talle]
    : ["XS", "S", "M", "L", "XL"]; // Tallas por defecto si no hay datos

  return (
    <section className="nc-product-section">
      <div className="nc-product-container">
        {/* Product Image */}
        <div className="nc-product-image-container">
          <div className="nc-product-image-wrapper">
            <img
              src={selectedItem.imagenUrl || "/placeholder.svg"}
              alt={selectedItem.nombre}
              className="nc-product-image"
              key={index}
            />
            <div className="nc-product-navigation">
              <button
                onClick={handlePrev}
                className="nc-nav-button"
                aria-label="Previous product"
              >
                <svg
                  className="nc-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="nc-nav-button"
                aria-label="Next product"
              >
                <svg
                  className="nc-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="nc-product-details">
          <div className="nc-product-header">
            <h2 className="nc-product-title" key={`title-${index}`}>
              {selectedItem.nombre}
            </h2>
            <span className="nc-product-price" key={`price-${index}`}>
              {selectedItem.precio}
            </span>
          </div>

          <div className="nc-product-content">
            <div className="nc-product-section">
              <h3 className="nc-section-title">DESCRIPTION</h3>
              <p className="nc-section-text" key={`desc-${index}`}>
                {selectedItem.descripcion || "Sin descripción disponible"}
              </p>
            </div>

            <div className="nc-product-section">
              <h3 className="nc-section-title">DETAILS</h3>
              <p className="nc-section-text" key={`details-${index}`}>
                {selectedItem.detalles ||
                  `Categoría: ${selectedItem.categoria || "N/A"}, 
                  Color: ${selectedItem.color || "N/A"}, 
                  Textura: ${selectedItem.textura || "N/A"}, 
                  Estación: ${selectedItem.estacion || "N/A"}`}
              </p>
            </div>

            <div className="nc-product-section">
              <h3 className="nc-section-title">SIZES</h3>
              <div className="nc-sizes-container" key={`sizes-${index}`}>
                {tallas.map((talla) => (
                  <div key={talla} className="nc-size-option">
                    {talla}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button className="nc-add-to-cart-button" onClick={handleAddToCart}>
            ADD TO CART
          </button>
        </div>
      </div>
    </section>
  );
};

export default Swiper1New;
