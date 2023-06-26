import React, { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import doctor from '../images/doctor.jpg';

const initialState = JSON.parse(localStorage.getItem('favs')) || [];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAV":
      return [...state, ...action.payload];
    default:
      return state;
  }
};

const Card = ({ name, username, id }) => {
  const [favs, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favs));
  }, [favs]);

  const addFav = () => {
    const anteriorFavs = JSON.parse(localStorage.getItem("favs")) || [];
    const nuevosFavs = [...anteriorFavs, { name, username, id }];

    dispatch({
      type: "ADD_FAV",
      payload: nuevosFavs,
    });
  };

  return (
    <div className="card">
      <img className="card-img" src={doctor} alt="Doctor" />
      <h4>{name}</h4>
      <h5>{username}</h5>
      <h4>{id}</h4>
      <Link to={`/dentista/${id}`}>Más info</Link>

      <button onClick={addFav} className="favButton"> 
        ADD FAV
      </button>
    </div>
  );
};

export default Card;
