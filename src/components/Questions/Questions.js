import React, { useState, useEffect, useRef } from 'react';

import AudioPlayer from '../AudioPlayer/AudioPlayer';
import defaultBird from '../../assets/images/defaultBird.jpg';

import cls from './Questions.module.css';

const Questions = ({ questionBird, isGuessedBird }) => {
  const audioRef = useRef(null);
  const [url, setUrl] = useState('');

  useEffect(() => {
    audioRef.current.src = questionBird.audio;
    setUrl(questionBird.audio);

  }, [questionBird.audio, url]);

  const audio = questionBird.audio;

  return (
    <div className='container'>
      <div className={`${cls.QuestionBlock} ${cls.QuestionBlockRounded}`}>
        <img className={cls.QuestionBlockImage} src={defaultBird} alt='' />
        <div className={cls.Tools}>
          <h3 className={cls.ToolsTitle}>******</h3>
          <div>
            <AudioPlayer ref={audioRef} url={audio}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
