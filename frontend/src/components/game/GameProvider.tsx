import { PropsWithChildren, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Variable, VariableData } from '../../common/variables';
import { gameContext, GameContextState } from '../../context/gameContext';
import { generateChats } from '../../utils/contentGenerators';

const DEFAULT_CONTROLS = Object.values(Variable).reduce((acc, variable) => {
  acc[variable] = VariableData[variable].default;
  return acc;
}, {} as Record<Variable, number>);

/**
 * Stores all of the logic for the game state
 * @see GameContextState
 */
export const GameProvider = ({ children }: PropsWithChildren) => {
  const [controls, setControls] =
    useState<Record<Variable, number>>(DEFAULT_CONTROLS);
  const [chatId, setChatId] = useState(0);
  const [chats, setChats] = useState(generateChats(5));
  const [progress, setProgress] = useState<number[]>([]);
  const [inProgress, setInProgress] = useState(false);
  const [completedLevel, setCompletedLevel] = useState(false);

  const [level, setLevel] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (progress.length === Object.keys(chats).length && inProgress) {
      // Log results here

      // Game is finished - reset
      setInProgress(false);
      setCompletedLevel(true);
      setChats(generateChats(10));
      setProgress([]);
    }
  }, [progress]);

  const state: GameContextState = {
    controls,
    level,
    chats,
    progress: progress.length,
    inProgress,
    completedLevel,
    activeChatId: chatId,
    goToChat: (id: number) => setChatId(id),
    reactToMessage: (id, react) => {
      if (id === -1) {
        const completed = chats[chatId].targetReact === react;

        if (completed) {
          setProgress((p) => (p.includes(chatId) ? p : [...p, chatId]));
        }

        setChats((c) => ({
          ...c,
          [chatId]: {
            ...c[chatId],
            currentReact: react,
            completed: completed,
          },
        }));
      } else {
        setChats((c) => ({
          ...c,
          [chatId]: {
            ...c[chatId],
            messages: c[chatId].messages.map((m) =>
              m.id === id ? { ...m, react } : m
            ),
          },
        }));
      }
    },
    updateControls: (key: string, value: number) => {
      setControls({ ...controls, [key]: value });
    },
    startGame: () => {
      setInProgress(true);
      setChats(generateChats(5));
      setProgress([]);
      setChatId(0);
    },
    goToNextLevel: () => {
      if (completedLevel) {
        if (level === 3) {
          navigate('/results');
        } else {
          setLevel((l) => l + 1);
          setCompletedLevel(false);
          setChats(generateChats(10));
          setProgress([]);
        }
      }
    },
  };

  return <gameContext.Provider value={state}>{children}</gameContext.Provider>;
};
