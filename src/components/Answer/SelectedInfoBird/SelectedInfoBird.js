import React, { useRef } from 'react';

import AudioPlayer from '../../AudioPlayer/AudioPlayer';

import cls from './SelectedInfoBird.module.css';

const SelectedInfoBird = ({ selectedBird }) => {
  const audioRef = useRef(null);

  return (
    <>
      <div className={cls.CardBird}>
        {selectedBird && (
          <img
            className={cls.CardImg}
            src={selectedBird && selectedBird.image}
            alt=''
          ></img>
        )}
        <div className={cls.CardName}>
          {selectedBird && (
            <span className={`${cls.CardName} ${cls.CardNameRus}`}>
              {selectedBird.name}
            </span>
          )}
          {selectedBird && (
            <span className={`${cls.CardName} ${cls.CardNameLat}`}>
              {selectedBird.species}
            </span>
          )}
          {selectedBird && (
            <AudioPlayer ref={audioRef} url={selectedBird.audio} />
          )}
        </div>
      </div>
      {selectedBird && (
        <p className={cls.CardDescription}>{selectedBird.description}</p>
      )}
    </>
  );
};

export default SelectedInfoBird;
