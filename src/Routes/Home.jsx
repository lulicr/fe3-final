import React, { useState, useEffect } from 'react';
import Card from '../Components/Card';
import { useContextGlobal } from '../Components/utils/global.context';

const Home = () => {
  const { state } = useContextGlobal();
  const { data, theme } = state;

  return (
    <main className={theme}>
      <h1>Home</h1>
      <div className="card-grid">
        {data.map((d) => (
          <Card key={d.id} id={d.id} name={d.name} username={d.username} />
        ))}
      </div>
    </main>
  );
};

export default Home;
