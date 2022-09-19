import { faker } from '@faker-js/faker';
import { PropsWithChildren, useState } from 'react';
import { useNavigate } from 'react-router';
import { EMOJIS } from '../../common/emojis';
import { Variable, VariableData } from '../../common/variables';
import {
  GameContextState,
  gameContext,
  gameContextInitalState,
} from '../../context/gameContext';

/**
 * Stores all of the logic for the game state
 * @see GameContextState
 */
export const GameProvider = ({ children }: PropsWithChildren) => {
  const [controls, setControls] = useState<Record<Variable, number>>(
    Object.values(Variable).reduce((acc, variable) => {
      acc[variable] = VariableData[variable].default;
      return acc;
    }, {} as Record<Variable, number>)
  );

  const [game, setGame] = useState<GameContextState['currentGameState']>();
  const [hasCompletedCurrentLevel, setHasCompletedCurrentLevel] =
    useState(false);
  const [level, setLevel] = useState(0);

  const navigate = useNavigate();

  const generateTask = () => ({
    emoji: faker.helpers.arrayElement(EMOJIS),
    person: faker.name.firstName(),
  });

  const state: GameContextState = {
    controls,
    level,
    updateControls: (key: string, value: number) => {
      setControls({ ...controls, [key]: value });
    },
    currentGameState: game,
    startGame: () => {
      setGame({
        totalTasks: 5,
        tasksCompleted: 0,
        task: generateTask(),
      });
    },
    hasCompletedCurrentLevel,
    goToNextLevel: () => {
      if (level === 3) {
        navigate('/results');
      } else {
        setLevel(level + 1);
        setHasCompletedCurrentLevel(false);
      }
    },
    advanceGameState: () => {
      if (!game) return;

      const tasksCompleted = game.tasksCompleted + 1;

      // If still more tasks to do generate a new task
      if (tasksCompleted < game.totalTasks) {
        setGame({
          ...game,
          tasksCompleted,
          task: generateTask(),
        });
      } else {
        setHasCompletedCurrentLevel(true);
        setGame(undefined);
      }
    },
  };

  return <gameContext.Provider value={state}>{children}</gameContext.Provider>;
};
