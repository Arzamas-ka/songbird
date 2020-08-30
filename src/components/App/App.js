import React, { useState } from 'react';

import Header from '../Header/Header';
import Answer from '../Answer/Answer';
import Questions from '../Questions/Questions';
import { birdsData } from '../../helpers/birds';
import QuizResult from '../QuizResult/QuizResult';
import { STEP_SCORE } from '../../helpers/consts';

const App = () => {
  const randomIndex = Math.floor(Math.random() * birdsData.length);
  const questionBird = birdsData[0][randomIndex];
  const [secretedBird, setSecretedBird] = useState(questionBird);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [isGuessedBird, setIsGuessedBird] = useState(false);
  const [navNumber, setNavNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [counter, setCounter] = useState(0);
  const [activeNextPageBtn, setActiveNextPageBtn] = useState(false);


  const [selectedBird, setSelectedBird] = useState(null);
  const [birds, setBirds] = useState(birdsData[0]);

  console.log('isGuessedBird init ', isGuessedBird);

  const initializeQuiz = () => {
    setScore(0);
    setNavNumber(0);
    setIsGuessedBird(false);
    setIsQuizFinished(false);
    setSecretedBird(questionBird);
  };

  const onClickNext = () => {
    if (!isGuessedBird) {
      return;
    }

    if (navNumber === birdsData.length - STEP_SCORE.secondary) {
      setIsQuizFinished(true);
      return;
    }

    if (isGuessedBird) {
      setNavNumber((navNumber) => navNumber + STEP_SCORE.secondary);
      setSecretedBird(birdsData[navNumber][randomIndex]);
      setIsGuessedBird(false);
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

    // if (isGuessedBird) {
    //   setSelectedBird(selectedBird);
    //   setBirds(updatedBirds);
    //   return;
    // }

    if (isCurrentChooseCorrect && counter !== 0) {
      setBirds(updatedBirds);
      setActiveNextPageBtn(true);
      setSelectedBird(selectedBird);
      setIsGuessedBird(isCurrentChooseCorrect);
      setScore((score) => score + STEP_SCORE.secondary);
    } else if (isCurrentChooseCorrect) {
      setBirds(updatedBirds);
      setActiveNextPageBtn(true);
      setSelectedBird(selectedBird);
      setIsGuessedBird(isCurrentChooseCorrect);
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
            onClickNext={onClickNext}
            isGuessedBird={isGuessedBird}
            activeNextPageBtn={activeNextPageBtn}
          />
        </>
      ) : (
        <QuizResult initializeQuiz={initializeQuiz} score={score} />
      )}
    </>
  );
};

export default App;
