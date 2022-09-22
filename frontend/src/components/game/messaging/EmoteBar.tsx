import { Stack } from '@mui/material';
import { EMOJIS } from '../../../common/emojis';
import { EmoteButton } from './EmoteButton';

export const EmoteBar = () => {
  return (
    <Stack direction='row' spacing={1}>
      {EMOJIS.map((emoji) => (
        <EmoteButton emoji={emoji} />
      ))}
    </Stack>
  );
};
