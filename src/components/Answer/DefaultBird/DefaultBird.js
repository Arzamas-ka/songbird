import React from 'react';

import cls from './DefaultBird.module.css';

const DefaultBird = () => {
  return (
    <div className={cls.DefaultBird}>
      <span>Послушайте плеер</span>
      <span>Выберите птицу из списка</span>
    </div>
  );
};

export default DefaultBird; 
