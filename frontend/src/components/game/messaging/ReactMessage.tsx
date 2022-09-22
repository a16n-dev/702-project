import { Box, IconButton, Stack } from '@mui/material';
import { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { EmoteBar } from './EmoteBar';
export interface ReactMessageProps {
  message: string;
  react: string;
}

export const ReactMessage = ({ message, react }: ReactMessageProps) => {
  const [selectEmote, emoteNotClicked] = useState(false);
  const handleSelectedEmote = () => {
    emoteNotClicked((current) => !current);
  };
  return (
    <Stack>
      {selectEmote && <EmoteBar />}
      <Stack direction='row'>
        <Box
          sx={{
            borderRadius: 6,
            py: 1,
            px: 1.5,
            bgcolor: 'grey.300',
            color: 'text.primary',
            maxWidth: 450,
          }}
        >
          {message}
        </Box>
        <IconButton onClick={handleSelectedEmote}>
          <AddCircleIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};
