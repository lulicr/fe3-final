import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useContextGlobal } from '../Components/utils/global.context';

const Detail = () => {
  const { state } = useContextGlobal();
  const { theme } = state;
  const [dentista, setDentista] = useState({});
  const params = useParams();

  useEffect(() => {
    const fetchDentista = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${params.id}`
        );
        const data = await response.json();
        setDentista(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDentista();
  }, [params.id]);

  return (
    <div className={theme}>
      <div className='center'>
      <h1>Detail Dentist</h1>
      <p>Name: {dentista.name}</p>
      <p>Email: {dentista.email}</p>
      <p>Phone: {dentista.phone}</p>
      <p>Website: {dentista.website}</p>
      </div>
    </div>
  );
};

export default Detail;
