import { Box, Button, Divider, Grid, Stack, Typography } from '@mui/material';
import { Variable } from '../../common/variables';
import { useGame } from '../../hooks/useGameState';
import { ConvoList } from './messaging/ConvoList';
import { ConvoListItem } from './messaging/ConvoListItem';

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
      <Button onClick={() => ctx.advanceGameState()}>Continue</Button>
    </Grid>
  );
};
