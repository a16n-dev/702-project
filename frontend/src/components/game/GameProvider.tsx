import { faker } from '@faker-js/faker';
import { PropsWithChildren, useState } from 'react';
import { useNavigate } from 'react-router';
import { EMOJIS } from '../../common/emojis';
import { Variable, VariableData } from '../../common/variables';
import {
  GameChat,
  gameContext,
  GameContextState,
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

  const generateChats = (n: number) => {
    const chats: { [id: number]: GameChat } = {};

    for (let i = 0; i < n; i++) {
      chats[i] = {
        id: i,
        name: faker.name.firstName(),
        completed: false,
        targetReact: faker.helpers.arrayElement(EMOJIS),
      };
    }

    return chats;
  };

  const state: GameContextState = {
    controls,
    level,
    updateControls: (key: string, value: number) => {
      setControls({ ...controls, [key]: value });
    },
    currentGameState: game,
    startGame: () => {
      setGame({
        chats: generateChats(5),
        activeChatId: 0,
        totalTasks: 5,
        tasksCompleted: 0,
        goToChat: (id: number) => {
          setGame((prev) =>
            prev
              ? {
                  ...prev,
                  activeChatId: id,
                }
              : prev
          );
        },
        reactToMessage: (id: number, emoji: string) => {},
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
  };

  return <gameContext.Provider value={state}>{children}</gameContext.Provider>;
};
