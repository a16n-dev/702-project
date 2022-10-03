import { Avatar, ListItemButton, Stack, Typography } from '@mui/material';
import { useGame } from '../../../hooks/useGameState';

export interface ConvoListItemProps {
  name: string;
  time: number;
}

export const ConvoListItem = ({ name, time }: ConvoListItemProps) => {
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
          <Typography>{name}</Typography>
          <Typography variant='body2' color='text.disabled'>
            Open to react • {(time + 1) * 2} mins ago
          </Typography>
        </Stack>
      </Stack>
    </ListItemButton>
  );
};
