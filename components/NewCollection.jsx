import "./NewCollection.css";

const NewCollection = () => {
  // Datos de ejemplo para la nueva colección
  const coleccion = [
    {
      id: 1,
      nombre: "Oversized Blazer",
      precio: "$129.99",
      imagenUrl:
        "https://liststore.dk/cdn/shop/files/list_18_12_202437130.jpg?v=1734690230&width=1000",
    },
    {
      id: 2,
      nombre: "Wide Leg Pants",
      precio: "$89.99",
      imagenUrl:
        "https://i.pinimg.com/736x/c9/14/6e/c9146e3f7450c8446c2605db6d4667f4.jpg",
    },
    {
      id: 3,
      nombre: "Silk Shirt",
      precio: "$119.99",
      imagenUrl:
        "https://i.pinimg.com/736x/d4/10/09/d41009a3fa17ede3f2f792d85cbfdc62.jpg",
    },
    {
      id: 4,
      nombre: "Wool Coat",
      precio: "$249.99",
      imagenUrl:
        "https://i.pinimg.com/736x/7e/b2/64/7eb2645ea1b402b1a03cfc06b0d6a320.jpg",
    },
    {
      id: 5,
      nombre: "Pleated Skirt",
      precio: "$79.99",
      imagenUrl:
        "https://i.pinimg.com/736x/f3/21/9d/f3219d346fcb6250d4a7311ae779353a.jpg",
    },
    {
      id: 6,
      nombre: "Knit Sweater",
      precio: "$99.99",
      imagenUrl:
        "https://i.pinimg.com/736x/e2/08/b0/e208b0f4ec23ae4a6acb9350c24aa2fb.jpg",
    },
  ];

  return (
    <div className="nc-nueva-coleccion-container">
      {/* Título de la colección */}
      <div className="nc-coleccion-titulo">
        <h1>NUEVA COLECCIÓN FW24</h1>
        <p>
          Minimalismo elegante que trasciende las tendencias. Piezas atemporales
          en blanco y negro que definen el estilo contemporáneo.
        </p>
      </div>

      {/* Cuadrícula de productos */}
      <div className="nc-coleccion-grid">
        <div className="nc-grid-items">
          {coleccion.map((item) => (
            <div className="nc-grid-item" key={item.id}>
              <div className="nc-grid-item-imagen">
                <img
                  src={item.imagenUrl || "/placeholder.svg"}
                  alt={item.nombre}
                />
              </div>
              <div className="nc-grid-item-info">
                <h3>{item.nombre}</h3>
                <p>{item.precio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Producto destacado */}
      <div className="nc-producto-destacado">
        <div className="nc-destacado-imagen">
          <img
            src="https://i.pinimg.com/736x/0c/95/76/0c95767cf0777003003a5319dd430f0c.jpg"
            alt="Producto destacado"
          />
        </div>
        <div className="nc-destacado-info">
          <div className="nc-destacado-header">
            <h2>Limited Edition Coat</h2>
            <p className="nc-destacado-precio">$299.99</p>
          </div>
          <div className="nc-destacado-descripcion">
            <h3>DESCRIPTION</h3>
            <p>
              Abrigo de edición limitada con corte oversized y detalles
              minimalistas. Una pieza statement para tu guardarropa.
            </p>
          </div>
          <div className="nc-destacado-detalles">
            <h3>DETAILS</h3>
            <p>
              Composición: 90% lana, 10% cashmere. Forro interior de seda. Hecho
              en Italia.
            </p>
          </div>
          <div className="nc-destacado-tallas">
            <h3>SIZES</h3>
            <div className="nc-tallas-opciones">
              <div className="nc-talla-opcion">XS</div>
              <div className="nc-talla-opcion">S</div>
              <div className="nc-talla-opcion">M</div>
              <div className="nc-talla-opcion">L</div>
            </div>
          </div>
          <button className="nc-boton-agregar">ADD TO CART</button>
        </div>
      </div>
      {/* Newsletter */}
      <div className="nc-newsletter-section">
        <h2 className="nc-newsletter-title">JOIN OUR NEWSLETTER</h2>
        <p className="nc-newsletter-description">
          Suscríbete para recibir actualizaciones sobre nuevas colecciones y
          ofertas exclusivas.
        </p>
        <div className="nc-newsletter-form">
          <input
            type="email"
            placeholder="Your email address"
            className="nc-newsletter-input"
          />
          <button className="nc-newsletter-button">SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
};

export default NewCollection;
