import { Stack, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <Stack
      direction='row'
      sx={{
        py: 1,
        px: 2,
      }}
    >
      <Typography variant='body2'>Created by Group 12</Typography>
    </Stack>
  );
};
