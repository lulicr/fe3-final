import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useContextGlobal } from '../Components/utils/global.context';
import doctor from '../images/doctor.jpg';
const Detail = () => {
  const { state, fetchDentista } = useContextGlobal();
  const { theme, dentista } = state;
  const params = useParams();

  useEffect(() => {
    fetchDentista(params.id);
  }, [fetchDentista, params.id]);

  return (
    <div className={theme}>
      <div className='center'>
        <h1 className='detail-titulo'>Detail Dentist</h1>
        <img className="card-img" src={doctor} alt="Doctor" />
        <p>Name: {dentista.name}</p>
        <p>Email: {dentista.email}</p>
        <p>Phone: {dentista.phone}</p>
        <p>Website: {dentista.website}</p>
      </div>
    </div>
  );
};

export default Detail;
