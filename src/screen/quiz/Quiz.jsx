

import { Button } from '@chakra-ui/react';
import React from 'react';
import { toast } from 'react-toastify';
import { Providers } from '../../provider';
import { Questions } from '../../utils/Question';

import cls from "./index.module.scss";

export default function Quiz() {
  const [currentQuest, setCurrentQuest] = React.useState(0);
  const [chusenOption, setChusenOption] = React.useState("");
  const { setScore, setGameState } = Providers.useAuth();
  const notify = () => toast("Choose the answer");

  const options = ["optionA", "optionB", "optionC", "optionD"];

  const listQuest = Questions[currentQuest];

  const nextQuestion = () => {
    if(chusenOption === listQuest.answer) {
      setScore(prev => prev + 1);
    }

    if(chusenOption !== "") {
      setCurrentQuest(prev => prev + 1);
      setChusenOption("");
    } else {
      notify();
    }
  }

  const finishQuiz = () => {
    if(chusenOption === listQuest.answer) {
      setScore(prev => prev + 1);
    }

    setGameState("end");
  }

  return (
    <div className={cls.quiz_point}>
      <span>{currentQuest}</span>
      <h2>{Questions[currentQuest].question}</h2>
      <ul>
        {
          options.map(item => (
            <li
              onClick={() => setChusenOption(item)} 
              key={item}
              className={chusenOption === item ? cls.activeList : ""}
            >
              {listQuest[item]}
            </li>
          ))
        }
      </ul>

      <div className={cls.quiz_point_button}>
        {
          currentQuest === Questions.length - 1
            ? <Button onClick={finishQuiz} colorScheme='yellow'>Finish Quiz</Button>
            : <Button onClick={nextQuestion} colorScheme='yellow'>Next question</Button>
        }
      </div>
    </div>
  )
}
