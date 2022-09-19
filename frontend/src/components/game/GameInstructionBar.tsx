import { Stack, Typography } from '@mui/material';
import { useGame } from '../../hooks/useGameState';

export const GameInstructionBar = () => {
  const ctx = useGame();

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
        {`Time Taken: 0:00`}
      </Typography>
    </Stack>
  );
};
