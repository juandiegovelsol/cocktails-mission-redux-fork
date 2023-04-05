import React from 'react';

import GoToBtn from '../components/GoToBtn/GoToBtn';

function home() {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  return (
    <div style={style}>
      <h2>Explore Cool Cocktails</h2>
      <GoToBtn />
    </div>
  );
}

export default home;
