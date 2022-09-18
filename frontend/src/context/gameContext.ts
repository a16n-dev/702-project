import { createContext } from 'react';

/**
 * The game context state stores information about the "game" such as the level
 * the user is on, their score, and the sizing/placement of the adjustable UI
 * elements
 */
export interface GameContextState {
  level: number;
  updateControls: (name: string, value: number) => void;
  controls: Record<string, number>;
}

export const gameContextInitalState = {
  level: 0,
  controls: {},
  updateControls: () => {},
};

export const gameContext = createContext<GameContextState>(
  gameContextInitalState
);
