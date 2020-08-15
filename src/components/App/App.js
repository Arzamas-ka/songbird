import React, { useState } from 'react';

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



  return (
    <div>
      <Header />
      <Questions questionBird={questionBird} isGuessedBird={isGuessedBird} />
      <Answer questions={birds} selectedBird={selectedBird} />
      {isQuizFinished && <QuizResult />}
    </div>
  );
};

export default App;
