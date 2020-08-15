import React from 'react';

import BirdDescription from './BirdDescription/BirdDescription';

import cls from './Answer.module.css';

const Answer = ({ selectedBird, questions }) => {
  const onClickNext = () => {
    console.log('Next page');
  };

  return (
    <>
      <div className={`${cls.Answers} container`}>
        <ul className={`${cls.ListGroup}`}>
          {questions.map(({ id, name }) => {
            return (
              <li key={id} className={`${cls.ListItem} list-group-item`}>
                <span className={cls.RadioBtn}></span>
                {name}
              </li>
            );
          })}
        </ul>
        <BirdDescription selectedBird={selectedBird} />
      </div>
      <div className='container'>
        <button className={cls.NextLevelBtn} onClick={() => onClickNext()}>
          Следующий уровень
        </button>
      </div>
    </>
  );
};

export default Answer;
