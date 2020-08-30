import React from 'react';

import BirdDescription from './BirdDescription/BirdDescription';

import cls from './Answer.module.css';

const Answer = ({
  selectedBird,
  questions,
  onSelectBird,
  onClickNext,
  activeNextPageBtn,
}) => {
  return (
    <>
      <div className={`${cls.Answers} container`}>
        <ul className={`${cls.ListGroup}`}>
          {questions.map(({ id, name, className }) => {
            const toggleClass = className ? className : 'li-btn';

            return (
              <li
                key={id}
                id={id}
                className={`${cls.ListItem} list-group-item`}
                onClick={() => onSelectBird(id)}
              >
                <span className={`${cls.RadioBtn} ${toggleClass}`}></span>
                {name}
              </li>
            );
          })}
        </ul>
        <BirdDescription selectedBird={selectedBird} />
      </div>
      <div className='container'>
        <button
          className={
            !activeNextPageBtn
              ? `${cls.NextLevelBtn}`
              : `${cls.NextLevelBtn} ${cls.NextLevelBtnActive}`
          }
          onClick={onClickNext}
        >
          Следующий уровень
        </button>
      </div>
    </>
  );
};

export default Answer;
