import { Typography, Grid, Link } from '@mui/material';

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
        <Typography> 2. Adjusting the Navigation Bar</Typography>
        <Typography> 3. Adjusting the Message Boxes</Typography>
        <Typography> 4. Adjusting the React Bar</Typography>
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
            src={`https://youtu.be/zYJuy5ZGmJI`}
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            title='Embedded youtube'
          />
        </div>
        <Typography>
          Here is a link to the pre-survey, post-survey, and Fitts' Law quiz
        </Typography>
        <Typography>
          pre:{' '}
          <Link href='https://forms.gle/y2s3XHc9faoTganHA'>
            https://forms.gle/y2s3XHc9faoTganHA
          </Link>
        </Typography>
        <Typography>
          post:{' '}
          <Link href='https://forms.gle/Nk6i5GU9Ha2AuBpS9'>
            https://forms.gle/Nk6i5GU9Ha2AuBpS9
          </Link>
        </Typography>
        <Typography>
          Fitts' Law quiz:{' '}
          <Link href='https://forms.gle/snRxznE1b34noSyV6'>
            https://forms.gle/snRxznE1b34noSyV6
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};
