import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  IconButton,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Swal from "sweetalert2";
import {
  deletePrivateCloset,
} from "../services/closetService";
import "../components/CardsCloset.css";
import BtnGrnc from "./BtnGnrc";
import { useAppContext } from "../contexts/FunctionContext";
import PropTypes from 'prop-types';

const CardsCloset = ({ setModalState }) => {
  const { closet, setRefresh } = useAppContext();

  async function handleDeleteCard(id) {
    const result = await Swal.fire({
      title: "Are you sure you want to delete this item?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: "Cancel",
    });


    
    if (result.isConfirmed) {
      try {
        const success = await deletePrivateCloset(id);
        if (success) {
          Swal.fire(success.message, "", "success");
          /* const updatedCloset = await getPrivateCloset();
          setCardsData(updatedCloset.closet); */
          setRefresh((prev) => !prev);
        }
      } catch (error) {
        console.log("error al eliminar el item: ", error);
        Swal.fire("Error", "There was an error deleting the item.", "error");
      }
    } else if (result.isDenied) {
      Swal.fire("Cancelled", "Your item has not been deleted", "error");
    }
  }
  console.log("CLOSET EN CARDCLOSET> ", closet);

  return (
    <div className="divCardsClosetContainer">
      <div className="divCardsCloset">
        {(closet || []).map((card) => (
          <Card key={card._id} sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={card.nombre}
            />
            <CardMedia
              style={{ objectFit: "contain" }}
              component="img"
              height="194"
              image={`${import.meta.env.VITE_API_URL || 'http://localhost:3002'}/api/images/${card.imageURL.split('/').pop()}`}
              alt={card.nombre}
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {card.categoria}, {card.subcategoria}, {card.talle},{" "}
                {card.color}, {card.textura}, {card.estacion}, {card.ocasion}
              </Typography>
            </CardContent>
            <IconButton
              aria-label="delete"
              onClick={() => handleDeleteCard(card._id)}
            ></IconButton>
            <BtnGrnc
              style={{ marginRight: 10, marginBottom: 10 }}
              txt="Editar"
              onClick={() => setModalState({ state: "EDITAR", data: card })}
            />
            <BtnGrnc
              style={{ marginBottom: 10 }}
              txt="Eliminar"
              onClick={() => handleDeleteCard(card._id)}
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

CardsCloset.propTypes = {
  setModalState: PropTypes.func.isRequired
};

export default CardsCloset;
