import { useContext } from 'react';
import { gameContext } from '../context/gameContext';

/**
 * Custom context hook
 */
export const useGame = () => useContext(gameContext);
