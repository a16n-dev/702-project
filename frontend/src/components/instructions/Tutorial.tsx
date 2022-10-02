import { Typography, Grid } from '@mui/material';

/**
 * A tutorial that explains to the user how the game works
 */
export const Tutorial = () => {
  return (
    <Grid>
      <Typography>
        Welcome to this Fitt's Law Experiential learning activity. This game
        involves you reacting to messages and seeing how changing the layout of
        the messenger changes the time it takes for you to react! The game
        consists of 4 levels:
      </Typography>
      <br />
      <Grid textAlign={'center'}>
        <Typography>
          {' '}
          1. Reacting to messages without changing the UI
        </Typography>
        <Typography> 2. Adjusting the Navigation Bar size</Typography>
        <Typography> 3. Adjusting the Message Box size</Typography>
        <Typography> 4.Adjusting the React Bar size</Typography>
        <br />
        <Typography>
          Each level your time taken to complete the level will be measured.
        </Typography>
        <Typography>
          Below is a video explaining how to play the game!
        </Typography>
        <br />
        <div className='video-responsive'>
          <iframe
            width='600'
            height='337.5'
            src={`https://www.youtube.com/embed/rokGy0huYEA`}
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            title='Embedded youtube'
          />
        </div>
      </Grid>
    </Grid>
  );
};
