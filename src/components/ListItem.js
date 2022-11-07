import React from 'react';

export const ListItem = ({ id, author, title, year, docType }) => {
  return (
    <div className='list-item'>
      <h3>{author}</h3>
      <p>
        <a href={`publication/${id}`}>{title}</a>
      </p>
      <p>{year}</p>
      <p>{docType}</p>
    </div>
  );
};
