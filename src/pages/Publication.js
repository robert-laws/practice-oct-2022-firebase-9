import React from 'react';
import Navigation from '../components/Navigation';
import { useParams } from 'react-router-dom';

export const Publication = () => {
  const { pubId } = useParams();

  return (
    <div>
      <h2>Single Publication</h2>
      <hr />
      <Navigation />
      <hr />
      <p>{pubId}</p>
    </div>
  );
};
