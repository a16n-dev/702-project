import { Stack } from '@mui/material';
import { EMOJIS } from '../../../common/emojis';
import { useGame } from '../../../hooks/useGameState';
import { EmoteButton } from './EmoteButton';

export interface EmoteBarProps {
  emote: string;
}

export const EmoteBar = ({ emote }: EmoteBarProps) => {
  const ctx = useGame();
  return (
    <Stack direction='row' spacing={ctx.controls.reactSpacing}>
      {EMOJIS.map((emoji) => (
        <EmoteButton emoji={emoji} givenEmote={emote} />
      ))}
    </Stack>
  );
};
