import {
  Box,
  CircularProgress,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { GetReflections200Response, ReflectionsApiFactory } from '../../api';
import { QUESTIONS } from './Questionaire';

interface responseType {
  answers: { question: string; answers: string[] }[];
}

export const ReflectionResponses = () => {
  const [responses, setResponses] = useState<GetReflections200Response>();

  useEffect(() => {
    ReflectionsApiFactory(undefined, process.env.API_URL)
      .getReflections()
      .then((res) => {
        setResponses(res.data);
      });
  }, []);

  return (
    <Container sx={{ py: 4, flexGrow: 1 }}>
      <Typography variant='h4'>Answers to Reflection Questions</Typography>
      <Divider />
      {!responses ? (
        <Stack sx={{ py: 4 }} alignItems='center'>
          <CircularProgress />
        </Stack>
      ) : (
        <Stack spacing={2}>
          {responses.answers.map((answers, index) => (
            <Stack key={index} spacing={1}>
              <Typography variant='h6'>{QUESTIONS[index].question}</Typography>
              <Box>
                <Grid container spacing={2}>
                  {answers.map((answer) => (
                    <Grid item xs={6} md={3} key={answer}>
                      <Paper sx={{ p: 2 }}>
                        <Typography>{answer}</Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Stack>
          ))}
        </Stack>
      )}
    </Container>
  );
};
