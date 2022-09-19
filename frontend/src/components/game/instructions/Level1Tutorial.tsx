import { Paper, Stack, Typography } from '@mui/material';

/**
 * This will be shown as a popup before level 1 starts
 */
export const Level1Tutorial = () => (
  // TODO: Implement this component
  <Stack>
    <Typography gutterBottom>
      This is a placeholder for the tutorial popup shown for level 1
    </Typography>
    <Paper sx={{ p: 2 }} variant='outlined'>
      <b>Edit this component</b>
      <pre>src/components/game/instructions/Level1Tutorial.tsx</pre>
    </Paper>
  </Stack>
);
