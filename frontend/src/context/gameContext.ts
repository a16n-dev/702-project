import { createContext } from 'react';
import { Variable, VariableData } from '../common/variables';

/**
 * The game context state stores information about the "game" such as the level
 * the user is on, their score, and the sizing/placement of the adjustable UI
 * elements
 */
export interface GameContextState {
  level: number;
  updateControls: (name: string, value: number) => void;
  controls: Record<Variable, number>;

  startGame: () => void;
  advanceGameState: () => void;
  hasCompletedCurrentLevel: boolean;
  goToNextLevel: () => void;

  currentGameState?: {
    task: {
      person: string;
      emoji: string;
    };
    tasksCompleted: number;
    totalTasks: number;
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
