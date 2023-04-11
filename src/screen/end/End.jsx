import { Button } from "@chakra-ui/react";
import React from "react";
import { Providers } from "../../provider";
import { Questions } from "../../utils/Question";

import cls from "./index.module.scss";

export default function End() {
    const { currentUser, setGameState, score, setScore } = Providers.useAuth();

    const restartGame = () => {
      setGameState("quiz");
      setScore(0);
    }


    return (
        <div className={cls.end_point}>
            <h2>{currentUser?.displayName}</h2>

            <p>{score} / {Questions.length}</p>

            <span>
              {score === Questions.length && "Wow you are monster"}
              {(score < 3 && score > 1) && "So not found"}
              {(score === 1) && "Mm! Okay you need restsrt"}
              {(score < 1) && "Go to black work!"}
            </span>

            <div className={cls.end_point_button}>
                <Button 
                  onClick={restartGame} 
                  colorScheme='yellow'
                >
                  Restart Quiz
                </Button>
            </div>
        </div>
    )
}

