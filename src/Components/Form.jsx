import React from "react";
import { useState } from "react";

const Form = () => {
  const [user, setUser] = useState({
    nombre: "",
    correo: ""
  });

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.nombre.length > 5) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          disabled={show}
          onChange={(event) =>
            setUser({ ...user, nombre: event.target.value })
          }
        />
        <label htmlFor="correo">Email</label>
        <input
          type="email"
          id="correo"
          disabled={show}
          onChange={(event) =>
            setUser({ ...user, correo: event.target.value })
          }
        />
        <button type="submit" className="submit-button">
          Enviar
        </button>
      </form>

      {show ? (
        <p>{`Gracias ${user.nombre}, te contactaremos lo antes posible vía email.`}</p>
      ) : null}

      {error && <p>Por favor verifique su información nuevamente.</p>}
    </div>
  );
};

export default Form;

