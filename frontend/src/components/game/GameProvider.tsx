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
  const [state, setState] = useState<GameContextState>(gameContextInitalState);

  return <gameContext.Provider value={state}>{children}</gameContext.Provider>;
};
