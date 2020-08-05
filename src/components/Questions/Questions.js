import React from 'react';

import AudioPlayer from '../AudioPlayer/AudioPlayer';
import defaultBird from '../../assets/images/defaultBird.jpg';

import cls from './Questions.module.css';

const Questions = () => {
  return (
    <div className='container'>
      <div className={`${cls.QuestionBlock} ${cls.QuestionBlockRounded}`}>
        <img className={cls.QuestionBlockImage} src={defaultBird} alt='' />
        <div className={cls.Tools}>
          <h3>Bird</h3>
          <div>
            <AudioPlayer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
