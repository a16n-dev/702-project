import { PropsWithChildren, useState } from 'react';
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
  const [controls, setControls] = useState<Record<string, number>>({});

  const state: GameContextState = {
    controls,
    level: 0,
    updateControls: (key: string, value: number) => {
      setControls({ ...controls, [key]: value });
    },
  };

  return <gameContext.Provider value={state}>{children}</gameContext.Provider>;
};
