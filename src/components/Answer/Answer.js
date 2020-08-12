import React from 'react';

import BirdDescription from './BirdDescription/BirdDescription';

import cls from './Answer.module.css';

const Answer = ({ selectedBird }) => {
  const onClickNext = () => {
    console.log('Next page');
  };

  return (
    <>
      <div className={`${cls.Answers} container`}>
        <ul className={`list-group ${cls.ListGroup}`}>
          <li className={`${cls.ListItem} list-group-item`}>
            <span className={cls.RadioBtn}></span>Птица
          </li>
        </ul>
        <BirdDescription selectedBird={selectedBird} />
      </div>
      <div className='container'>
        <button className={cls.NextLevelBtn} onClick={() => onClickNext()}>
          Next Level
        </button>
      </div>
    </>
  );
};

export default Answer;
