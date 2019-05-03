import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <header>
    <div>
      <Link to="/">
        <h1>Vizualizace</h1>
      </Link>
      <Link to="/voters">Voters</Link>
    </div>
  </header>
);
