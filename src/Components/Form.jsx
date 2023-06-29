import React from "react";
import {useState} from "react";

const Form = () => {

  const [user, setUser] = useState({
    nombre: '',
    correo: ''
  })

  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)
  
  const handleSubmit = (event) => {
    event.preventDefault()
    if(user.nombre.length > 5){
    setShow(true)
    setError(false)
    } else {setError(true)}
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <label >Nombre</label>
          <input type="text" disabled={show} onChange={(event)  => setUser({ ...user, nombre: event.target.value })}/>
          <label >Email</label>
          <input type="email" disabled={show} onChange={(event)  => setUser({ ...user, correo: event.target.value })}/>
          <button type="submit">Enviar</button>
      </form>

      {show ?  
        <>
        { 'Gracias ' + user.nombre + ', te contactaremos cuando antes vía mail'}
        </>
        : 
        null
      }
      {error && 'Por favor verifique su información nuevamente'}
    </div>

  );
};

export default Form;
