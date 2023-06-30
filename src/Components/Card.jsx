import React, { useReducer, useEffect } from "react";
import { Link } from "react-router-dom";
import doctor from '../images/doctor.jpg';

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAV":
      return {
        ...state,
        favorito: [...state.favorito, action.payload.id],
      };
    default:
      return state;
  }
};

const Card = ({ name, username, id }) => {
  const [state, dispatch] = useReducer(reducer, { favorito: [] });

  useEffect(() => {
    const prevFavs = JSON.parse(localStorage.getItem("favs")) || [];
    if (prevFavs.find(fav => fav.id === id)) {
      dispatch({
        type: "ADD_FAV",
        payload: { id },
      });
    }
  }, [id]);

  const favDeshabilitar = state.favorito.find(fav => fav === id) !== undefined;


  const addFav = () => {
    const nuevosFavs = { name, username, id };
    dispatch({
      type: "ADD_FAV",
      payload: { id },
    });

    const prevFavs = JSON.parse(localStorage.getItem("favs")) || [];
    const actualizadoFavs = [...prevFavs, nuevosFavs];
    localStorage.setItem("favs", JSON.stringify(actualizadoFavs));
  };

  return (
    <div className="card">
      <h4>{id} {username}</h4>
      <img className="card-img" src={doctor} alt="Doctor" />
      <h5>{name}</h5>
      <Link to={`/dentista/${id}`}>Más info</Link>
      <button onClick={addFav} className="favButton" disabled={favDeshabilitar}>
        ADD FAV
      </button>
    </div>
  );
};

export default Card;

