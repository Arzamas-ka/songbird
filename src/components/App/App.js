/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react';

import Header from '../Header/Header';
import Answer from '../Answer/Answer';
import Questions from '../Questions/Questions';
import { birdsData } from '../../helpers/birds';
import QuizResult from '../QuizResult/QuizResult';
import { STEP_SCORE } from '../../helpers/consts';

const App = () => {
  const randomIndex = Math.floor(Math.random() * birdsData.length);
  const questionBird = useCallback(
    (navNumber) => birdsData[navNumber][randomIndex],
  );
  const [navNumber, setNavNumber] = useState(0);
  const [secretedBird, setSecretedBird] = useState(questionBird(navNumber));
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [isGuessedBird, setIsGuessedBird] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedBird, setSelectedBird] = useState(null);
  const [birds, setBirds] = useState(birdsData[navNumber]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setSecretedBird(questionBird(navNumber));
    setIsGuessedBird(false);
    setBirds(birdsData[navNumber]);
  }, [navNumber]);

  useEffect(() => {
    birdsData.forEach((collection) => {
      collection.forEach((bird) => {
        bird.className = 'li-btn';
      });
    });
  }, [isQuizFinished]);

  const initializeQuiz = () => {
    setScore(0);
    setNavNumber(0);
    setIsGuessedBird(false);
    setIsQuizFinished(false);
    setSelectedBird(null);
    setSecretedBird(questionBird(navNumber));
  };

  const handleClickNext = () => {
    if (!isGuessedBird) {
      return;
    }

    if (navNumber === birdsData.length - STEP_SCORE.secondary) {
      setIsQuizFinished(true);
      return;
    }

    if (isGuessedBird) {
      setCounter(0);
      setSelectedBird(null);
      setNavNumber(navNumber + STEP_SCORE.secondary);
    }
  };

  const handleSelectBird = (id) => {
    const selectedBird = birdsData[navNumber].find((elem) => elem.id === id);
    const isCurrentChooseCorrect = secretedBird.name === selectedBird.name;
    setCounter((counter) => counter + STEP_SCORE.secondary);

    const updatedBirds = birds.map((bird) => {
      if (bird.id === id) {
        bird.className =
          id === secretedBird.id
            ? 'li-btn li-btn--right'
            : 'li-btn li-btn--wrong';
      }

      return bird;
    });

    if (isCurrentChooseCorrect && counter !== 0) {
      setBirds(updatedBirds);
      setSelectedBird(selectedBird);
      setIsGuessedBird(true);
      setScore((score) => score + STEP_SCORE.secondary);
      console.log(birds);
    } else if (isCurrentChooseCorrect) {
      setBirds(updatedBirds);
      setSelectedBird(selectedBird);
      setIsGuessedBird(true);
      setScore((score) => score + STEP_SCORE.primary);
    } else {
      setBirds(updatedBirds);
      setSelectedBird(selectedBird);
    }
  };

  return (
    <>
      <Header score={score} navNumber={navNumber} />
      {!isQuizFinished ? (
        <>
          <Questions
            secretedBird={secretedBird}
            isGuessedBird={isGuessedBird}
          />
          <Answer
            questions={birds}
            selectedBird={selectedBird}
            onSelectBird={handleSelectBird}
            handleClickNext={handleClickNext}
            isGuessedBird={isGuessedBird}
          />
        </>
      ) : (
        <QuizResult initializeQuiz={initializeQuiz} score={score} />
      )}
    </>
  );
};

export default App;
