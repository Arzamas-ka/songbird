import React from 'react';

import cls from './Questions.module.css';

const Questions = () => {
  return <div className='container'>
    <div className={`${cls.QuestionBlock} ${cls.QuestionBlockRounded}`}></div>
  </div>;
};

export default Questions;
