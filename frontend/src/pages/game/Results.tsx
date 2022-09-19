import { Button, Container, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const Results = () => (
  <Container sx={{ my: 4, flexGrow: 1 }}>
    <Stack>
      <Typography variant='h4'>Results</Typography>
      <Button variant='contained' component={Link} to='/reflections'>
        Go to Reflections
      </Button>
    </Stack>
  </Container>
);
