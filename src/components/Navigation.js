import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <p>
        <Link to='/'>Home</Link>
      </p>
      <p>
        <Link to='/crud'>Crud</Link>
      </p>
      <p>
        <Link to='/users'>Users</Link>
      </p>
      <p>
        <Link to='/publications'>All Publications</Link>
      </p>
    </div>
  );
};

export default Navigation;
