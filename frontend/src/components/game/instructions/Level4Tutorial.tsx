import { Stack, Typography, Paper, Box } from '@mui/material';

export const Level4Tutorial = () => (
  // TODO: Implement this component
  <Stack>
    <Typography>This level requires you to change the React Bar.</Typography>
    <Paper sx={{ p: 2 }} variant='outlined'>
      <br />
      <Typography>
        Follow the instructions on the green bar. React to the messages as fast
        as possible. You need to <b>react to the correct message 5 times </b>
        in order to stop the timer and complete the level.
      </Typography>
      <br />
      <Typography fontWeight={'medium'} textAlign={'center'}>
        This level requires you to change the React Bar. You can change the size
        and spacing of the Emojis as well as the Bar itself. Use the scroll bar
        on the right panel to change the React Bar to suit the web page. Think
        about the distance and size components of Fitts' law as you make
        changes.
      </Typography>
      <br />
      <Typography textAlign={'center'} fontWeight={'bold'}>
        Press "Test UI" to begin the test.
      </Typography>
    </Paper>
  </Stack>
);
