import { Button } from '@mui/material';
import { useGame } from '../../../hooks/useGameState';

export interface EmoteProps {
  emoji: string;
}
export const EmoteButton = ({ emoji }: EmoteProps) => {
  const ctx = useGame();
  return (
    <Button
      sx={{
        fontSize: `${ctx.controls.reactBarSize * 3}px`,
        height: `${ctx.controls.reactBarSize * 5}px`,
        width: `${ctx.controls.reactBarSize * 5}px`,
      }}
    >
      {emoji}
    </Button>
  );
};
