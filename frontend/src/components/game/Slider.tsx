import {
  Stack,
  Slider as MuiSlider,
  SliderProps as MuiSliderProps,
  OutlinedInput,
  Grid,
  InputAdornment,
} from '@mui/material';
import { Variable, VariableData } from '../../common/variables';
import { useGame } from '../../hooks/useGameState';

export interface SliderProps extends MuiSliderProps {
  controls: Variable;
}

export const Slider = ({ controls, disabled, ...rest }: SliderProps) => {
  const ctx = useGame();

  return (
    <Grid container spacing={2}>
      <Grid item xs={9}>
        <Stack alignItems='center' sx={{ height: '100%' }} direction='row'>
          <MuiSlider
            {...rest}
            disabled={disabled}
            step={1}
            value={ctx.controls[controls]}
            onChange={(e, v) => ctx.updateControls(controls, v as number)}
            valueLabelFormat={(v) =>
              `${v.toFixed(0)}${VariableData[controls].unit || ''}`
            }
            valueLabelDisplay='auto'
          />
        </Stack>
      </Grid>
      <Grid item xs={3}>
        <OutlinedInput
          size='small'
          disabled={disabled}
          value={ctx.controls[controls]}
          onChange={(e) => ctx.updateControls(controls, Number(e.target.value))}
          endAdornment={<InputAdornment position='end'>px</InputAdornment>}
        />
      </Grid>
    </Grid>
  );
};
