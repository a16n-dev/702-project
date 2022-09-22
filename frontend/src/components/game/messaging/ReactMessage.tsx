import { Box, IconButton, Stack } from '@mui/material';
import { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { EmoteBar } from './EmoteBar';
import { useGame } from '../../../hooks/useGameState';
export interface ReactMessageProps {
  message: string;
  react: string;
}

export const ReactMessage = ({ message, react }: ReactMessageProps) => {
  const ctx = useGame();
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
            height: `${ctx.controls.messageSize * 5}px`,
            width: `${ctx.controls.messageSize * 40}px`,
          }}
        >
          {message}
        </Box>
        <IconButton
          onClick={handleSelectedEmote}
          sx={{
            height: `${ctx.controls.reactButtonSize * 10}px`,
            width: `${ctx.controls.reactButtonSize * 10}px`,
          }}
        >
          <AddCircleIcon
            sx={{
              height: `${ctx.controls.reactButtonSize * 10}px`,
              width: `${ctx.controls.reactButtonSize * 10}px`,
            }}
          />
        </IconButton>
      </Stack>
    </Stack>
  );
};
