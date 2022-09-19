import { Box, Button, Stack, Typography } from '@mui/material';
import { Variable } from '../../common/variables';
import { useGame } from '../../hooks/useGameState';

/**
 * Fake messaging UI
 */
export const Game = () => {
  const ctx = useGame();

  // TODO: Implement the messaging UI inside of this component
  return (
    <Stack sx={{ p: 4 }}>
      <Box
        sx={{
          width: 10 * 8,
          marginLeft: ctx.controls[Variable.messagePosition] * 8,
          height: ctx.controls[Variable.messageSize] * 8,
          bgcolor: 'secondary.main',
        }}
      />
      <Typography>Click the button to advance through the level</Typography>
      <Button
        disabled={!ctx.currentGameState}
        color='secondary'
        size='large'
        variant='contained'
        onClick={() => ctx.advanceGameState()}
      >
        Next
      </Button>
    </Stack>
  );
};
