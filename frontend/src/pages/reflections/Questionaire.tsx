import { Button, Container, Stack, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const QUESTIONS = [
  {
    question: 'How are you feeling today?',
    key: 'q1',
  },
  {
    question: 'How are you feeling today?',
    key: 'q2',
  },
  {
    question: 'How are you feeling today?',
    key: 'q3',
  },
  {
    question: 'How are you feeling today?',
    key: 'q4',
  },
  {
    question: 'How are you feeling today?',
    key: 'q5',
  },
];

export const Questionaire = () => {
  return (
    <Container sx={{ flexGrow: 1, py: 4 }}>
      <Stack spacing={2}>
        <Typography gutterBottom variant='h4'>
          Reflections
        </Typography>
        <Typography gutterBottom>
          Minim laborum excepteur irure aliqua. Excepteur nulla velit sint
          veniam excepteur id occaecat. Excepteur ad officia eu ex occaecat elit
          excepteur commodo ullamco dolore do cupidatat ut occaecat. In deserunt
          aute tempor proident aliqua ex. Non pariatur enim consequat nisi
          tempor qui reprehenderit. Minim laborum excepteur irure aliqua.
          Excepteur nulla velit sint veniam excepteur id occaecat. Excepteur ad
          officia eu ex occaecat elit excepteur commodo ullamco dolore do
          cupidatat ut occaecat. In deserunt aute tempor proident aliqua ex. Non
          pariatur enim consequat nisi tempor qui reprehenderit.
        </Typography>
        <Stack spacing={2}>
          {QUESTIONS.map((q) => (
            <TextField multiline rows={2} label={q.question} key={q.key} />
          ))}
        </Stack>
        <Button
          size='large'
          sx={{ alignSelf: 'flex-start' }}
          variant='contained'
          component={Link}
          to='/reflection-responses'
        >
          Submit Answers
        </Button>
      </Stack>
    </Container>
  );
};
