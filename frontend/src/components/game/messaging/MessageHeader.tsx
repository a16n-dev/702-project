import { Stack, Avatar, Typography } from '@mui/material';
import { useGame } from '../../../hooks/useGameState';

export const MessageHeader = () => {
  const ctx = useGame();

  return (
    <Stack
      alignItems='center'
      spacing={1}
      direction='row'
      sx={{ px: 2, py: 1 }}
    >
      <Avatar />
      <Typography>{ctx.chats[ctx.activeChatId].name}</Typography>
    </Stack>
  );
};
