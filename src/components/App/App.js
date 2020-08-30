import React, { useState } from 'react';

import Header from '../Header/Header';
import Questions from '../Questions/Questions';
import Answer from '../Answer/Answer';
import QuizResult from '../QuizResult/QuizResult';
import { birdsData } from '../../helpers/birds';

const App = () => {
  const randomIndex = Math.floor(Math.random() * birdsData.length);
  const [navNumber, setNavNumber] = useState(0);
  const questionBird = birdsData[navNumber][randomIndex];
  const [secretedBird, setSecretedBird] = useState(questionBird);
  const [score, setScore] = useState(0);
  const [stepScore, setStepScore] = useState(5);
  // const [image, setImage] = useState(null);
  const [selectedBird, setSelectedBird] = useState(null);
  const [isGuessedBird, setIsGuessedBird] = useState(false);
  const [birds, setBirds] = useState(birdsData[0]);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  // const [kindBirds, setKindBirds] = useState(speciesBirds[0]);
  const [counter, setCounter] = useState(0);

  const initializeQuiz = () => {
    console.log('вы выйграли');
  };

  const onClickNext = () => {
    console.log('next')
    if (!isGuessedBird) {
      return;
    }

    if (navNumber === birdsData.length - 1) {
      setIsQuizFinished(true);
      return;
    }

    setNavNumber((navNumber) => navNumber + 1);
    setBirds(birdsData[navNumber + 1]);
    setIsGuessedBird(false);
    setSelectedBird(false);
    setStepScore(5);
  };

  const handleSelectBird = (id) => {
    const selectedBird = birdsData[navNumber].find((elem) => elem.id === id);
    const isCurrentChooseCorrect = secretedBird.name === selectedBird.name;
    setCounter((counter) => counter + 1);

    const updatedBirds = birds.map((bird) => {
      if (bird.id === id) {
        bird.className =
          id === secretedBird.id
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

    if (isCurrentChooseCorrect && counter !== 0) {
      setSelectedBird(selectedBird);
      setBirds(updatedBirds);
      setIsGuessedBird(isCurrentChooseCorrect);
      setScore((score) => score + 1);
    } else if (isCurrentChooseCorrect) {
      setSelectedBird(selectedBird);
      setBirds(updatedBirds);
      setIsGuessedBird(isCurrentChooseCorrect);
      setScore((score) => score + stepScore);
    } else {
      setSelectedBird(selectedBird);
      setBirds(updatedBirds);
    }
  };

  return (
    <>
      <Header score={score} navNumber={navNumber} />
      {!isQuizFinished && (
        <>
          <Questions
            secretedBird={secretedBird}
            isGuessedBird={isGuessedBird}
          />
          <Answer
            questions={birds}
            selectedBird={selectedBird}
            onSelectBird={handleSelectBird}
            onClickNext={onClickNext}
            isGuessedBird={isGuessedBird}
          />
        </>
      )}

      {isQuizFinished && (
        <QuizResult handleClick={initializeQuiz} score={score} />
      )}
    </>
  );
};

export default App;
