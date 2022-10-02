import { Stack, Typography, Paper, Box } from '@mui/material';

export const Level3Tutorial = () => (
  // TODO: Implement this component
  <Stack>
    <Typography>
      This level requires you to change the Message Boxes.
    </Typography>
    <Paper sx={{ p: 2 }} variant='outlined'>
      <br />
      <Typography>
        Follow the instructions on the green bar. React to the messages as fast
        as possible. You need to{' '}
        <Box fontWeight='bold' display='inline'>
          react to the correct message 5 times{' '}
        </Box>
        in order to stop the timer and complete the level.
      </Typography>
      <br />
      <Typography fontWeight={'medium'} textAlign={'center'}>
        This level requires you to change both the distance and size of Message
        Boxes. Think about the distance and size components of Fitts' law as you
        make changes.
      </Typography>
      <br />
      <Typography textAlign={'center'} fontWeight={'bold'}>
        Press "Test UI" to begin the test.
      </Typography>
    </Paper>
  </Stack>
);
