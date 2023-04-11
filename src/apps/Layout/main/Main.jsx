

import React from 'react';
import { Providers } from '../../../provider';
import cls from "./index.module.scss";
import * as Screen from "../../../screen";

export default function Main() {
  const { gameState } = Providers.useAuth();


  return (
      <section className={cls.main_point}>
        {gameState === "start" && <Screen.Start/>}
        {gameState === "quiz" && <Screen.Quiz/>}
        {gameState === "end" && <Screen.End/>}
      </section>
  )
};
