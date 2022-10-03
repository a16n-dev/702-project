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
        <Stack direction='row'>
          {EMOJIS.map((e) => (
            <IconButton
              onClick={() => {
                setAnchorEl(null);
                ctx.reactToMessage(messageId, e);
              }}
              color='primary'
              key={e}
              sx={{
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
