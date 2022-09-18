import { Stack, Typography } from '@mui/material';
import { useGame } from '../../hooks/useGameState';

/**
 * A sidebar that shows the user instructions for the current level,
 * and also gives them feedback such as the current level, their score, etc...
 */
export const GameSidebar = () => {
  const ctx = useGame();

  return (
    <Stack sx={{ p: 2 }}>
      <Typography variant='body2'>{`Level ${ctx.level + 1}`}</Typography>
      <Typography variant='h6' gutterBottom>
        Instructions
      </Typography>
      <Typography>This tells the person what to do</Typography>
    </Stack>
  );
};
