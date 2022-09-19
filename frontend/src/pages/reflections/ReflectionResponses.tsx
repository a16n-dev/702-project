import { CircularProgress, Container, Stack, Typography } from '@mui/material';

interface responseType {
  answers: { question: string; answers: string[] }[];
}

export const ReflectionResponses = () => {
  // Do the api call here
  const responses: responseType | undefined = {
    answers: [],
  };

  return (
    <Container sx={{ py: 4, flexGrow: 1 }}>
      <Typography variant='h4'>Yes</Typography>
      {!responses ? (
        <Stack>
          <CircularProgress />
        </Stack>
      ) : (
        <Stack></Stack>
      )}
    </Container>
  );
};
