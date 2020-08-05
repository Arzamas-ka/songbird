import React from 'react';

import cls from './QuizResult.module.css';

const QuizResult = () => {
  return (
    <div className={`${cls.Result} container`}>
      <h1 className={cls.ResultTitle}>Поздравляем!</h1>
      <span className={cls.ResultText}>
        Вы прошли викторину и набрали {} из 30 возможных баллов.
      </span>
      <button className='btn btn-info'>Попробовать еще раз</button>
    </div>
  );
};

export default QuizResult;
