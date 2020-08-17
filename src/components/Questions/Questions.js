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

  const { audio, name, image } = questionBird;
  const birdName = isGuessedBird ? name : '******';
  const birdImage = isGuessedBird ? image : defaultBird;

  return (
    <div className='container'>
      <div className={`${cls.QuestionBlock}`}>
        <img className={cls.QuestionBlockImage} src={birdImage} alt='' />
        <div className={cls.Tools}>
          <h3 className={cls.ToolsTitle}>{birdName}</h3>
          <div>
            <AudioPlayer ref={audioRef} url={audio} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
