import { createContext } from 'react';
import { EMOJIS } from '../common/emojis';
import { Variable, VariableData } from '../common/variables';
import { MessageData } from '../components/game/messaging/Message';

export interface GameChat {
  id: number;
  name: string;
  completed: boolean;
  targetReact: typeof EMOJIS[number];
  currentReact?: typeof EMOJIS[number];
  messages: MessageData[];
}

export interface ClickEvent {
  targetId?: string;
  xPos: number;
  yPos: number;
  timestamp: number;
  controls: Record<Variable, number>;
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
  results: { events: ClickEvent[]; level: number }[];

  chats: { [id: number]: GameChat };
  activeChatId: number;
  inProgress: boolean;
  completedLevel: boolean;
  progress: number;

  // Interact with the current level
  goToChat: (id: number) => void;
  reactToMessage: (messageId: number, react: typeof EMOJIS[number]) => void;

  startGame: () => void;
  goToNextLevel: () => void;

  logClickEvent: (e: ClickEvent) => void;
}

export const gameContextInitalState: GameContextState = {
  level: 0,
  controls: Object.values(Variable).reduce((acc, variable) => {
    acc[variable] = VariableData[variable].default;
    return acc;
  }, {} as Record<Variable, number>),
  updateControls: () => {},
  chats: [],
  activeChatId: 0,
  goToChat: () => {},
  reactToMessage: () => {},
  inProgress: false,
  startGame: () => {},
  progress: 0,
  goToNextLevel: () => {},
  completedLevel: false,
  logClickEvent: () => {},
  results: [],
};

export const gameContext = createContext<GameContextState>(
  gameContextInitalState
);
