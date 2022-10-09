import { Paper, Stack, Typography, Box } from '@mui/material';

/**
 * This will be shown as a popup before level 1 starts
 */
export const Level1Tutorial = () => (
  // TODO: Implement this component
  <Stack>
    <Typography gutterBottom>
      This level does not require any editing to the components.
    </Typography>
    <Paper sx={{ p: 2 }} variant='outlined'>
      <b>Base speed test</b>
      <Typography>
        React to the messages as fast as possible. You need to{' '}
        <b>react to the correct message 5 times</b> in order to stop the timer
        and complete the level.
      </Typography>
      <br />
      <Typography textAlign={'center'} fontWeight={'bold'}>
        Press "Test UI" to begin the test.
      </Typography>
    </Paper>
  </Stack>
);
