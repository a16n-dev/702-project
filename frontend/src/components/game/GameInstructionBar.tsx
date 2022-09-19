import { Stack, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useGame } from '../../hooks/useGameState';

const formatNumberAsTime = (x: number) =>
  `${Math.floor(x / 600)}:${((x / 10) % 60).toFixed().padStart(2, '0')}`;

export const GameInstructionBar = () => {
  const ctx = useGame();
  const [timer, setTimer] = useState(0);
  const timerRef = useRef<number>();

  useEffect(() => {
    if (ctx.currentGameState) {
      timerRef.current = window.setTimeout(() => setTimer((t) => t + 1), 100);
    } else {
      setTimer(0);
    }

    return () => window.clearTimeout(timerRef.current);
  }, [ctx.currentGameState, timer]);

  if (!ctx.currentGameState)
    return (
      <Stack sx={{ bgcolor: 'secondary.main', p: 1 }}>
        <Typography>{'Press "Test UI" to start the game'}</Typography>
      </Stack>
    );

  const { task, tasksCompleted, totalTasks } = ctx.currentGameState;

  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      sx={{ bgcolor: 'secondary.main', p: 1 }}
    >
      <Typography
        sx={{ flex: '1 1 0' }}
        align='left'
      >{`${tasksCompleted}/${totalTasks}`}</Typography>
      <Typography sx={{ flex: '1 1 0' }} align='center'>
        {`React ${task.emoji} to ${task.person}'s Message`}
      </Typography>
      <Typography sx={{ flex: '1 1 0' }} align='right'>
        {`Time Taken: ${formatNumberAsTime(timer)}`}
      </Typography>
    </Stack>
  );
};
