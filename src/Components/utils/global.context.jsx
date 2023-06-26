import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";

export const initialState = {
  theme: "light",
  data: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        data: action.payload,
      };
    case "CHANGE_THEME":
      return {
        ...state,
        theme: action.payload,
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
        console.error("Error al obtener los datos:", error);
      });
  };

  const changeTheme = (newTheme) => {
    dispatch({ type: "CHANGE_THEME", payload: newTheme });
  };

  return (
    <ContextGlobal.Provider value={{ state, fetchData, changeTheme }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal);
