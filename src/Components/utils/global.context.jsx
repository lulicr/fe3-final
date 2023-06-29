import React, { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";

export const initialState = {
  theme: "light",
  data: [],
  dentista: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state, data: action.payload,
      };
    case "CHANGE_THEME":
      return {
        ...state, theme: action.payload,
      };
    case "SET_DENTISTA":
      return {
        ...state, dentista: action.payload,
      };
    default:
      throw new Error();
  }
};

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const url = "https://jsonplaceholder.typicode.com/users";

    axios
      .get(url)
      .then((res) => {
        dispatch({ type: "SET_DATA", payload: res.data });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const changeTheme = (newTheme) => {
    dispatch({ type: "CHANGE_THEME", payload: newTheme });
  };

  const fetchDentista = (id) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        dispatch({ type: "SET_DENTISTA", payload: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ContextGlobal.Provider value={{ state, fetchData, changeTheme, fetchDentista }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal);
