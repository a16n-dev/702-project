import {
  Stack,
  Slider as MuiSlider,
  SliderProps as MuiSliderProps,
  OutlinedInput,
} from '@mui/material';
import { useGame } from '../../hooks/useGameState';

export interface SliderProps extends MuiSliderProps {
  controls: string;
}

export const Slider = ({ controls, ...rest }: SliderProps) => {
  const ctx = useGame();

  return (
    <Stack direction='row'>
      <MuiSlider
        {...rest}
        step={0.1}
        value={ctx.controls[controls]}
        onChange={(e, v) => ctx.updateControls(controls, v as number)}
      />
      <OutlinedInput
        value={ctx.controls[controls]}
        onChange={(e) => ctx.updateControls(controls, Number(e.target.value))}
      />
    </Stack>
  );
};
