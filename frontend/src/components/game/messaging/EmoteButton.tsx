import { Button } from '@mui/material';
import { useState } from 'react';
import { useGame } from '../../../hooks/useGameState';

export interface EmoteProps {
  emoji: string;
  givenEmote: string;
}
export const EmoteButton = ({ emoji, givenEmote }: EmoteProps) => {
  const ctx = useGame();
  const [emojiState, emojiSelection] = useState(false);
  const correctEmoji = () => {
    if (givenEmote == emoji) {
      emojiSelection(!emojiState);
      // Put in game state logic here lmao
    }
  };
  return (
    <Button
      sx={{
        fontSize: `${ctx.controls.reactBarSize * 3}px`,
        height: `${ctx.controls.reactBarSize * 5}px`,
        width: `${ctx.controls.reactBarSize * 5}px`,
      }}
      onClick={() => correctEmoji()}
    >
      {emoji}
    </Button>
  );
};
