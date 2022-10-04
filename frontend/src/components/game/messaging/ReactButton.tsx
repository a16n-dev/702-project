import {
  Tooltip,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Popover,
  Box,
} from '@mui/material';
import { useState } from 'react';
import { useGame } from '../../../hooks/useGameState';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { EMOJIS } from '../../../common/emojis';

export interface ReactButtonProps {
  messageId: number;
}

export const ReactButton = ({ messageId }: ReactButtonProps) => {
  const ctx = useGame();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Tooltip title='React to message'>
        <IconButton
          id='react-button'
          data-click-target-id={`message-react-button-${messageId}`}
          sx={{
            height: `${ctx.controls.reactButtonSize * 14}px`,
            width: `${ctx.controls.reactButtonSize * 14}px`,
            display: open ? 'inline-flex' : 'none',
          }}
          color='primary'
          onClick={handleClick}
        >
          <EmojiEmotionsIcon
            sx={{
              height: `${ctx.controls.reactButtonSize * 10}px`,
              width: `${ctx.controls.reactButtonSize * 10}px`,
            }}
          />
        </IconButton>
      </Tooltip>
      <Popover
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            px: 1,
            borderRadius: 999,
            overflow: 'hidden',
          },
        }}
      >
        <Stack direction='row' spacing={ctx.controls.reactSpacing - 2}>
          {EMOJIS.map((e) => (
            <IconButton
              data-click-target-id={`message-react-popup-button-${e}`}
              onClick={() => {
                setAnchorEl(null);
                ctx.reactToMessage(messageId, e);
              }}
              color='primary'
              key={e}
              sx={{
                height: ctx.controls.reactBarSize * 10,
                width: ctx.controls.reactBarSize * 10,
                fontSize: ctx.controls.reactBarSize * 5,
                ['& *']: {
                  transition: 'transform 0.2s',
                },
                ['&:hover *']: {
                  transform: 'scale(1.2)',
                },
              }}
            >
              <Box>{e}</Box>
            </IconButton>
          ))}
        </Stack>
      </Popover>
    </div>
  );
};
