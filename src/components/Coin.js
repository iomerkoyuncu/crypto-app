import React from 'react';

function Coin({name, symbol, price, icon}) {
  return (
    <div className='card'>
      <img src={icon} />
      <h3>{name}</h3>
      <h3>{symbol}</h3>
      <h3>{price}</h3>
    </div>
  );
}

export default Coin;

