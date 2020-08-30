/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';

import AudioPlayer from '../AudioPlayer/AudioPlayer';
import defaultBird from '../../assets/images/defaultBird.jpg';

import cls from './Questions.module.css';

const Questions = ({ secretedBird, isGuessedBird }) => {
  const audioRef = useRef(null);
  const [url, setUrl] = useState('');
  const { audio, name, image } = secretedBird;

  console.log('загаданная secretedBird', secretedBird.id);

  useEffect(() => {
    audioRef.current.src = secretedBird.audio;
    setUrl(secretedBird.audio);

    return () => {
      audioRef.current.src = audio;
    };

  }, [audio, secretedBird.audio]);

  const birdName = isGuessedBird ? name : '******';
  const birdImage = isGuessedBird ? image : defaultBird;

  return (
    <div className='container'>
      <div className={`${cls.QuestionBlock}`}>
        <img className={cls.QuestionBlockImage} src={birdImage} alt='' />
        <div className={cls.Tools}>
          <h3 className={cls.ToolsTitle}>{birdName}</h3>
          <div>
            <AudioPlayer ref={audioRef} url={url} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
