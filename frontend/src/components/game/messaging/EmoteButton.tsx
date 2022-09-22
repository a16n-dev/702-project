import { Button } from '@mui/material';

export interface EmoteProps {
  emoji: string;
}
export const EmoteButton = ({ emoji }: EmoteProps) => {
  return <Button>{emoji}</Button>;
};
