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
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ReflectionsApiFactory, GetReflections200Response } from '../../api';

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
          {responses.questions.map((question, index) => (
            <Stack key={question} spacing={1}>
              <Typography variant='h6'>{question}</Typography>
              <Box>
                <Grid container spacing={2}>
                  {responses.answers[index].map((answer) => (
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
