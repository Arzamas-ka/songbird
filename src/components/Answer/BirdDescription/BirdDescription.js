import React from 'react';

import SelectedInfoBird from '../SelectedInfoBird/SelectedInfoBird';
import DefaultBird from '../DefaultBird/DefaultBird';

import cls from './BirdDescription.module.css';

const BirdDescription = ({ selectedBird }) => {

  return (
    <div className={`${cls.CardInfo} rounded card`}>
      {selectedBird && <SelectedInfoBird selectedBird={selectedBird} />}
      {!selectedBird && <DefaultBird />}
    </div>
  );
};

export default BirdDescription;
