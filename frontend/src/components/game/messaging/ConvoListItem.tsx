import { Avatar, ListItemButton, Stack, Typography } from '@mui/material';
import { useGame } from '../../../hooks/useGameState';

export const ConvoListItem = () => {
  const ctx = useGame();

  return (
    <ListItemButton sx={{ height: `${ctx.controls.navbarItemSize}px` }}>
      <Stack direction={'row'} spacing={1} alignItems='center'>
        <Avatar
          sx={{
            height: `${ctx.controls.navbarItemSize / 1.5}px`,
            width: `${ctx.controls.navbarItemSize / 1.5}px`,
          }}
        />
        <Stack>
          <Typography>Lorem Ipsum</Typography>
          <Typography variant='body2' color='text.disabled'>
            Lorem Ipsum • 3m
          </Typography>
        </Stack>
      </Stack>
    </ListItemButton>
  );
};
