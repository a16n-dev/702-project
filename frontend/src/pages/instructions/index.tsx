import { Stack, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { Tutorial } from '../../components/instructions/Tutorial';

export const Instructions = () => {
  return (
    <Container
      component={Stack}
      spacing={2}
      alignItems='flex-start'
      sx={{ flexGrow: 1, py: 4 }}
      maxWidth='md'
    >
      <Typography variant='h4'>Instructions</Typography>
      <Tutorial />
      <Button component={Link} to='/game' variant='contained'>
        Start
      </Button>
    </Container>
  );
};
