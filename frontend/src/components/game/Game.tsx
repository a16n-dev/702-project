import { Box, Button, Divider, Grid, Stack, Typography } from '@mui/material';
import { names } from '../../common/names';
import { Variable } from '../../common/variables';
import { useGame } from '../../hooks/useGameState';
import { ConvoList } from './messaging/ConvoList';
import { ConvoListItem } from './messaging/ConvoListItem';
import { MessageBottomBar } from './messaging/MessageBottomBar';
import { MessageDisplay } from './messaging/MessageDisplay';
import { MessageHeader } from './messaging/MessageHeader';

/**
 * Fake messaging UI
 */
export const Game = () => {
  const { chats, activeChatId, goToChat, inProgress } = useGame();

  return (
    <Grid container sx={{ flexGrow: 1 }}>
      <Grid item xs={3.5}>
        <ConvoList>
          {Object.entries(chats).map(([id, chat]) => (
            <ConvoListItem key={id} id={Number(id)} />
          ))}
        </ConvoList>
      </Grid>
      <Divider orientation='vertical' flexItem />
      <Grid item xs>
        <Stack sx={{ height: '100%' }}>
          <MessageHeader />
          <Divider />
          <MessageDisplay />
          <Divider />
          <MessageBottomBar />
        </Stack>
      </Grid>
    </Grid>
  );
};
