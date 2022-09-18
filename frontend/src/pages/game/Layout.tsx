import { Divider, Grid } from '@mui/material';
import { Game } from '../../components/game/Game';
import { GameProvider } from '../../components/game/GameProvider';
import { GameSidebar } from '../../components/game/GameSidebar';

export const GameLayout = () => (
  <GameProvider>
    <Grid container sx={{ flexGrow: 1 }}>
      <Grid item xs={9}>
        <Game />
      </Grid>
      <Divider orientation='vertical' flexItem />
      <Grid item xs>
        <GameSidebar />
      </Grid>
    </Grid>
  </GameProvider>
);
