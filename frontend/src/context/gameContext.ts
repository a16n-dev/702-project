import { createContext } from 'react';
import { EMOJIS } from '../common/emojis';
import { Variable, VariableData } from '../common/variables';

export interface GameChat {
  id: number;
  name: string;
  completed: boolean;
  targetReact: typeof EMOJIS[number];
}

/**
 * The game context state stores information about the "game" such as the level
 * the user is on, their score, and the sizing/placement of the adjustable UI
 * elements
 */
export interface GameContextState {
  level: number;
  updateControls: (name: string, value: number) => void;
  controls: Record<Variable, number>;
  hasCompletedCurrentLevel: boolean;
  startGame: () => void;
  goToNextLevel: () => void;

  currentGameState?: {
    chats: { [id: number]: GameChat };
    activeChatId: number;
    tasksCompleted: number;
    totalTasks: number;

    // Interact with the current level
    goToChat: (id: number) => void;
    reactToMessage: (chatId: number, react: typeof EMOJIS[number]) => void;
  };
}

export const gameContextInitalState = {
  level: 0,
  controls: Object.values(Variable).reduce((acc, variable) => {
    acc[variable] = VariableData[variable].default;
    return acc;
  }, {} as Record<Variable, number>),
  updateControls: () => {},
  startGame: () => {},
  advanceGameState: () => {},
  hasCompletedCurrentLevel: false,
  goToNextLevel: () => {},
};

export const gameContext = createContext<GameContextState>(
  gameContextInitalState
);
