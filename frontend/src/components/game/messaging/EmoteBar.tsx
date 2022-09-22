import { Stack } from '@mui/material';
import { EMOJIS } from '../../../common/emojis';
import { useGame } from '../../../hooks/useGameState';
import { EmoteButton } from './EmoteButton';

export const EmoteBar = () => {
  const ctx = useGame();
  return (
    <Stack direction='row' spacing={ctx.controls.reactSpacing}>
      {EMOJIS.map((emoji) => (
        <EmoteButton emoji={emoji} />
      ))}
    </Stack>
  );
};
