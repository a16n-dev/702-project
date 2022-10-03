import { Avatar, Box, ListItemButton, Stack, Typography } from '@mui/material';
import { useGame } from '../../../hooks/useGameState';

export interface ConvoListItemProps {
  id: number;
}

export const ConvoListItem = ({ id }: ConvoListItemProps) => {
  const ctx = useGame();

  const chat = ctx.chats[id];

  return (
    <ListItemButton
      sx={{ height: `${ctx.controls.navbarItemSize}px` }}
      selected={ctx.activeChatId === id}
      onClick={() => ctx.goToChat(id)}
    >
      <Stack
        direction={'row'}
        spacing={1}
        alignItems='center'
        sx={{ width: '100%' }}
      >
        <Avatar
          sx={{
            height: `${ctx.controls.navbarItemSize / 1.5}px`,
            width: `${ctx.controls.navbarItemSize / 1.5}px`,
          }}
        />
        <Stack>
          <Typography>{chat.name}</Typography>
          <Typography variant='body2' color='text.disabled'>
            React {chat.targetReact} to this message
          </Typography>
        </Stack>
        <Box sx={{ flexGrow: 1 }} />
        {!chat.completed && (
          <Box
            sx={{
              borderRadius: 999,
              width: 12,
              height: 12,
              bgcolor: 'primary.main',
            }}
          />
        )}
      </Stack>
    </ListItemButton>
  );
};
