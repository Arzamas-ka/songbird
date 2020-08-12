import React from 'react';

import cls from './BirdDescription.module.css';

const BirdDescription = (props) => {
  console.log('BirdDescription ', props);
  return <div className={`${cls.CardInfo} card`}>BirdDescription</div>;
};

export default BirdDescription;
