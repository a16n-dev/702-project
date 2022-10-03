import { Divider, Grid, Stack } from '@mui/material';
import { Game } from '../../components/game/Game';
import { GameInstructionBar } from '../../components/game/GameInstructionBar';
import { GameProvider } from '../../components/game/GameProvider';
import { GameSidebar } from '../../components/game/GameSidebar';

export const GameLayout = () => (
  <GameProvider>
    <Grid container sx={{ flexGrow: 1 }}>
      <Grid item xs={9}>
        <Stack sx={{ height: '100%' }}>
          <Game />
        </Stack>
      </Grid>
      <Divider orientation='vertical' flexItem />
      <Grid item xs>
        <GameSidebar />
      </Grid>
    </Grid>
  </GameProvider>
);
