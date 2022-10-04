import { Container, Stack, Divider } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { GameProvider } from '../components/game/GameProvider';
import { Footer } from '../components/layout/Footer';
import { Header } from '../components/layout/Header';

/**
 * The top level layout that is shown on all pages
 */
export const Layout = () => {
  return (
    <GameProvider>
      <Container sx={{ boxShadow: 8 }} disableGutters maxWidth='xl'>
        <Stack sx={{ minHeight: '100vh', overflowY: 'hidden' }}>
          <Header />
          <Outlet />
          <Divider />
          <Footer />
        </Stack>
      </Container>
    </GameProvider>
  );
};
