import React, { useState, useEffect } from 'react';

import Header from '../Header/Header';
import Questions from '../Questions/Questions';
import Answer from '../Answer/Answer';
import QuizResult from '../QuizResult/QuizResult';
import { birdsData, speciesBirds } from '../../helpers/birds';

const App = () => {
  const randomIndex = Math.floor(Math.random() * birdsData.length);
  const questionBird = birdsData[0][randomIndex];
  const [navNumber, setNavNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [stepScore, setStepScore] = useState(5);
  const [image, setImage] = useState(null);
  const [selectedBird, setSelectedBird] = useState(null);
  const [isGuessedBird, setIsGuessedBird] = useState(null);
  const [birds, setBirds] = useState(birdsData[0]);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [kindBirds, setKindBirds] = useState(speciesBirds[0]);

  const handleSelectBird = (id) => {
    const selectedBird = birdsData[navNumber].find((elem) => elem.id === id);

    const updatedBirds = birds.map((bird) => {
      if (bird.id === id) {
        bird.className =
          id === questionBird.id
            ? 'li-btn li-btn--right'
            : 'li-btn li-btn--wrong';
      }

      return bird;
    });

    if (isGuessedBird) {
      setSelectedBird(selectedBird);
      setBirds(updatedBirds);
      return;
    }

    const isCurrentChooseCorrect = questionBird.name === selectedBird.name;

    if (isCurrentChooseCorrect) {
      setSelectedBird(selectedBird);
      setBirds(updatedBirds);
      setIsGuessedBird(isCurrentChooseCorrect);
      setScore(score + stepScore);
    } else {
      setSelectedBird(selectedBird);
      setBirds(updatedBirds);
      setScore(stepScore - 1);
    }
  };

  return (
    <div>
      <Header score={score} />
      <Questions questionBird={questionBird} isGuessedBird={isGuessedBird} />
      <Answer
        questions={birds}
        selectedBird={selectedBird}
        onSelectBird={handleSelectBird}
        // onClickNext={onClickNext}
        isGuessedBird={isGuessedBird}
      />
      {isQuizFinished && <QuizResult />}
    </div>
  );
};

export default App;
