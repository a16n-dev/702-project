import { Box, Stack, Typography } from '@mui/material';
import { useGame } from '../../hooks/useGameState';

export const Game = () => {
  const ctx = useGame();

  return (
    <Stack sx={{ p: 4 }}>
      <Box
        sx={{
          width: 10 * 8,
          marginLeft: ctx.controls['boxXPos'] * 8,
          height: ctx.controls['boxHeight'] * 8,
          bgcolor: 'secondary.main',
        }}
      />
    </Stack>
  );
};
