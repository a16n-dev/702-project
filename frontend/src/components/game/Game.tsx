import { Box, Button, Divider, Grid, Stack, Typography } from '@mui/material';
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
  const ctx = useGame();

  // TODO: Implement the messaging UI inside of this component
  return (
    <Grid container sx={{ flexGrow: 1 }}>
      <Grid item xs={3.5}>
        <ConvoList>
          <ConvoListItem />
          <ConvoListItem />
          <ConvoListItem />
          <ConvoListItem />
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
