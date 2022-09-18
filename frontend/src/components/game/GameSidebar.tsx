import { Divider, Stack, Typography } from '@mui/material';
import { useGame } from '../../hooks/useGameState';
import { Slider } from './Slider';

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
      <Typography>
        Fugiat occaecat Lorem amet consequat labore veniam anim ex anim commodo.
        Laboris officia et nisi nostrud ullamco officia irure duis ea. Dolore
        Lorem mollit elit officia enim voluptate proident.
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant='h6' gutterBottom>
        Controls
      </Typography>
      <Stack sx={{ py: 2 }}>
        <Typography variant='body2'>Box Height</Typography>
        <Slider min={1} max={10} controls='boxHeight' />
      </Stack>
      <Stack sx={{ py: 2 }}>
        <Typography variant='body2'>X Position</Typography>
        <Slider min={1} max={10} controls='boxXPos' />
      </Stack>
    </Stack>
  );
};
