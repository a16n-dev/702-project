import { Button, Divider, Stack, Typography } from '@mui/material';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useDialog } from 'react-dialog-async';
import { LEVELS } from '../../common/levels';
import { VariableData } from '../../common/variables';
import { useGame } from '../../hooks/useGameState';
import { GameTutorialDialog } from './GameTutorialDialog';
import { Slider } from './Slider';

/**
 * A sidebar that shows the user instructions for the current level,
 * and also gives them feedback such as the current level, their score, etc...
 */
export const GameSidebar = () => {
  const ctx = useGame();
  const [timer, setTimer] = useState(0);
  const timerRef = useRef<number>();
  const levelData = useMemo(() => LEVELS[ctx.level], [ctx.level]);

  const tutorialDialog = useDialog(GameTutorialDialog);

  const showTutorial = () => {
    if (levelData.tutorial) {
      // show the tutorial
      tutorialDialog.show({
        content: levelData.tutorial,
      });
    }
  };

  const startGame = () => {
    ctx.startGame();
    setTimer(0);
  };
  useEffect(() => {
    if (ctx.inProgress) {
      timerRef.current = window.setTimeout(() => setTimer((t) => t + 1), 100);
    }
    return () => window.clearTimeout(timerRef.current);
  }, [ctx.inProgress, timer]);

  useEffect(() => {
    showTutorial();
  }, [levelData]);

  return (
    <Stack sx={{ p: 2 }}>
      <Typography variant='body2'>{`Level ${ctx.level + 1}`}</Typography>
      <Stack
        direction='row'
        sx={{ mb: 1 }}
        justifyContent='space-between'
        alignItems='center'
      >
        <Typography variant='h6'>Instructions</Typography>
        <Button onClick={showTutorial}>Replay Demo</Button>
      </Stack>
      <Typography>{levelData.description}</Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant='h6' gutterBottom>
        Controls
      </Typography>
      {levelData.variables.map((v) => {
        const data = VariableData[v];

        return (
          <Stack sx={{ py: 2 }}>
            <Typography variant='body2'>{data.label}</Typography>
            <Slider
              disabled={!!ctx.inProgress}
              min={data.min}
              max={data.max}
              controls={v}
            />
          </Stack>
        );
      })}

      <Stack direction={'row'} spacing={2}>
        <Button
          fullWidth
          size='large'
          variant='contained'
          onClick={() => startGame()}
          disabled={ctx.inProgress}
        >
          {'Test UI'}
        </Button>
        <Button
          fullWidth
          color='secondary'
          size='large'
          variant='contained'
          disabled={ctx.inProgress || !ctx.completedLevel}
          onClick={() => ctx.goToNextLevel()}
        >
          Next Level
        </Button>
      </Stack>
      <Typography> Time Taken: {timer} ms</Typography>
      <Typography>
        {`${ctx.progress} / ${Object.keys(ctx.chats).length}`}
      </Typography>
    </Stack>
  );
};
