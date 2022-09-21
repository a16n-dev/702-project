import { Stack, Typography, Button } from '@mui/material';
import { useGame } from '../../../hooks/useGameState';

export const MessageBottomBar = () => {
  const ctx = useGame();

  return (
    <Stack direction='row' sx={{ px: 2, py: 1 }} spacing={1}>
      <Stack
        alignItems='center'
        spacing={1}
        sx={{
          borderRadius: 999,
          bgcolor: 'grey.300',
          px: 1.5,
          py: 1,
          color: 'text.secondary',
          flexGrow: 1,
        }}
        direction='row'
      >
        <Typography>Type something here...</Typography>
      </Stack>
      <Button onClick={ctx.advanceGameState}>Continue</Button>
    </Stack>
  );
};
