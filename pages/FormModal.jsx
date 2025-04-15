import { useState } from "react";

import BtnGnrc from "../components/BtnGnrc";
import "../pages/FormModal.css";
import {
  postImgService,
  postPrivateCloset,
  updatePrivateCloset,
} from "../services/closetService";
import { useAppContext } from "../contexts/FunctionContext";

const modalInfo = {
  nombre: "",
  talle: "",
  color: "",
  categoria: "",
  subcategoria: "",
  textura: "",
  estacion: "",
  ocasion: "",
};

const opGeneral = ["xs", "s", "m", "l", "xl"];

const opShoes = ["35", "36", "37", "38", "39", "40", "41"];

const FormModal = ({ modalState, setModalState }) => {
  const { closet, setCloset } = useAppContext();
  const [itemData, setItemData] = useState(modalState.data || modalInfo);
  const [image, setImage] = useState(null);

  console.log("itemdata: ", itemData);

  async function handleFormModal() {
    console.log("handleFormModal itemData", itemData);
    console.log("handleFormModal closet ", closet);

    const itemExists = closet.some(
      (item) =>
        item.nombre.toLowerCase().trim() ===
        itemData.nombre.toLowerCase().trim()
    );

    if (!itemExists) {
      console.log("entro en if !itemExist");
      console.log("setModalState: ", setModalState);

      if (modalState.state === "CREAR") {
        const imageURL = await postImgService(image);
        if (imageURL === false) {
          alert("NO SE PUDO SUBIR LA IMAGEN");
          return;
        }
        const fullItem = {
          ...itemData,
          imageURL: imageURL,
        };
        const userCloset = await postPrivateCloset(fullItem); // arr: obj
        console.log("userCloset crear: ", userCloset);

        if (!userCloset) {
          return;
        }

        setCloset(userCloset);
      } else if (modalState.state === "EDITAR") {
        const userCloset = await updatePrivateCloset(itemData._id, itemData); // obj
        console.log("userCloset editar: ", userCloset);

        setCloset(userCloset);
      }
      closeModal();
    } else {
      console.log("El item ya existe en el closet.");
      return;
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setItemData({
      ...itemData,
      [name]: value,
    });
  }

  async function handleFileChange(e) {
    const file = e.target.files[0];
    setImage(file);
    console.log("file es: ", file);
  }

  function closeModal() {
    setModalState(false);
    setItemData({
      nombre: "",
      talle: "",
      color: "",
      categoria: "",
      subcategoria: "",
      textura: "",
      estacion: "",
      ocasion: "",
    });
  }

  if (!modalState.state) return null;

  return (
    <div>
      <div
        className="modalContainer"
        onClick={(e) => {
          if (e.target === e.currentTarget) setModalState({ state: false });
        }}
      >
        <div className="modalContent">
          <BtnGnrc
            txt="X"
            onClick={closeModal}
            style={{
              marginBottom: 10,
            }}
          />
          <div className="modalForm">
            <div>
              <input type="file" name="imageURL" onChange={handleFileChange} />
            </div>
            <div>
              <label>Nombre:</label>
              <input
                style={{ marginLeft: 10, padding: 10 }}
                type="text"
                name="nombre"
                onChange={handleChange}
                value={itemData.nombre}
              />
            </div>

            <div>
              <label>Categoria:</label>
              <select
                style={{ marginLeft: 10, padding: 10 }}
                name="categoria"
                onChange={handleChange}
                value={itemData.categoria}
              >
                <option value="">Seleccionar...</option>
                <option value="Accesorios">Accesorios</option>
                <option value="Parte de arriba">Parte de arriba</option>
                <option value="Parte de abajo">Parte de abajo</option>
                <option value="Calzado">Calzado</option>
              </select>
            </div>
            <div>
              <label>Subcategoria:</label>
              <select
                style={{ marginLeft: 10, padding: 10 }}
                name="subcategoria"
                onChange={handleChange}
                value={itemData.subcategoria}
              >
                <option value="">Seleccionar...</option>
                <option value="anillos">Anillos</option>
                <option value="collar">Collar</option>
                <option value="aros">Aros</option>
                <option value="pulsera">Pulsera</option>
                <option value="gorro">Gorro/gorra</option>
                <option value="cartera">Cartera/mochila</option>
                <option value="pañuelo">Pañuelo</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div>
              <label>Talle:</label>
              <select
                style={{ marginLeft: 10, padding: 10 }}
                name="talle"
                onChange={handleChange}
                value={itemData.talle}
              >
                <option hidden value="">
                  Seleccionar...
                </option>
                {itemData.categoria === "Calzado"
                  ? opShoes.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))
                  : opGeneral.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
              </select>
            </div>
            <div>
              <label>Color:</label>
              <select
                style={{ marginLeft: 10, padding: 10 }}
                name="color"
                onChange={handleChange}
                value={itemData.color}
              >
                <option value="">Seleccionar...</option>
                <option value="negro">Negro</option>
                <option value="blanco">Blanco</option>
                <option value="rojo">Rojo</option>
                <option value="jean">Jean</option>
                <option value="amarillo">Amarillo</option>
                <option value="verde claro">Verde claro</option>
                <option value="verde oscuro">Verde oscuro</option>
                <option value="azul oscuro">Azul Oscuro/Marino</option>
                <option value="azul claro">Azul claro</option>
                <option value="violeta">Violeta</option>
                <option value="morado">Morado</option>
                <option value="rosa">Rosa</option>
                <option value="naranja">Naranja</option>
                <option value="gris">Gris</option>
                <option value="beige">Beige</option>
                <option value="celeste">Celeste</option>
                <option value="turquesa">Turquesa</option>
                <option value="lavanda">Lavanda</option>
                <option value="fucsia">Fucsia</option>
                <option value="plateado">Plateado</option>
                <option value="dorado">Dorado</option>
                <option value="verde agua">Verde agua</option>
                <option value="purpura">Púrpura</option>
                <option value="marron">Marrón</option>
                <option value="rosa pastel">Rosa pastel</option>
                <option value="beige">Beige</option>
              </select>
            </div>

            <div>
              <label>Textura:</label>
              <select
                style={{ marginLeft: 10, padding: 10 }}
                name="textura"
                onChange={handleChange}
                value={itemData.textura}
              >
                <option value="">Seleccionar...</option>
                <option value="algodón">Algodón</option>
                <option value="poliéster">Poliéster</option>
                <option value="lino">Lino</option>
                <option value="seda">Seda</option>
                <option value="lana">Lana</option>
                <option value="jean/denim">Jean/Denim</option>
                <option value="cuero">Cuero</option>
                <option value="gamuza">Gamuza</option>
                <option value="terciopelo">Terciopelo</option>
                <option value="otra">Otra</option>
              </select>
            </div>
            <div>
              <label>Estacion:</label>
              <select
                style={{ marginLeft: 10, padding: 10 }}
                name="estacion"
                onChange={handleChange}
                value={itemData.estacion}
              >
                <option value="">Seleccionar...</option>
                <option value="invierno">Invierno</option>
                <option value="verano">Verano</option>
                <option value="otoño">Otoño</option>
                <option value="primavera">Primavera</option>
              </select>
            </div>
            <div>
              <label>Ocasion:</label>
              <select
                style={{ marginLeft: 10, padding: 10 }}
                name="ocasion"
                onChange={handleChange}
                value={itemData.ocasion}
              >
                <option value="">Seleccionar...</option>
                <option value="casual">Casual</option>
                <option value="formal">Formal</option>
                <option value="ocasional">Ocasional</option>
                <option value="deportiva">Deportiva</option>
                <option value="gala">Gala</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div>
              <BtnGnrc txt="Guardar" onClick={() => handleFormModal()} />
              <BtnGnrc txt="Cancelar" onClick={closeModal} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
