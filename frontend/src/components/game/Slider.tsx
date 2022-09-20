import {
  Stack,
  Slider as MuiSlider,
  SliderProps as MuiSliderProps,
  OutlinedInput,
} from '@mui/material';
import { Variable } from '../../common/variables';
import { useGame } from '../../hooks/useGameState';

export interface SliderProps extends MuiSliderProps {
  controls: Variable;
}

export const Slider = ({ controls, disabled, ...rest }: SliderProps) => {
  const ctx = useGame();

  return (
    <Stack direction='row'>
      <MuiSlider
        {...rest}
        disabled={disabled}
        step={1}
        value={ctx.controls[controls]}
        onChange={(e, v) => ctx.updateControls(controls, v as number)}
        valueLabelFormat={(v) => `${v.toFixed(0)}px`}
        valueLabelDisplay='auto'
      />
      <OutlinedInput
        disabled={disabled}
        value={ctx.controls[controls]}
        onChange={(e) => ctx.updateControls(controls, Number(e.target.value))}
      />
    </Stack>
  );
};
