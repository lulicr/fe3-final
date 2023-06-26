import React from 'react';
import Form from '../Components/Form';
import { useContextGlobal } from '../Components/utils/global.context';

const Contact = () => {
  const { state } = useContextGlobal();
  const { theme } = state;

  return (
    
    <div className={theme}>
      <div className='center'>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
    </div>
  );
};

export default Contact;
