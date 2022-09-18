import { Divider, Grid } from '@mui/material';
import { GameProvider } from '../../components/game/GameProvider';
import { GameSidebar } from '../../components/game/GameSidebar';

export const GameLayout = () => {
  return (
    <GameProvider>
      <Grid container sx={{ flexGrow: 1 }}>
        <Grid item xs={9}></Grid>
        <Divider orientation='vertical' flexItem />
        <Grid item xs>
          <GameSidebar />
        </Grid>
      </Grid>
    </GameProvider>
  );
};
