import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavigationBar() {
  const navigate = useNavigate();

  return (
    <nav>
      <button onClick={() => navigate('/search')}>Search</button>
      <button onClick={() => navigate('/update')}>Update</button>
      <button onClick={() => navigate('/delete')}>Delete</button>
    </nav>
  );
}

export default NavigationBar;

