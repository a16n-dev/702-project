import { Box, Stack, Tooltip, IconButton } from '@mui/material';
import { useState } from 'react';
import { useGame } from '../../../hooks/useGameState';
import { EMOJIS } from '../../../common/emojis';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { ReactButton } from './ReactButton';

export enum MessageType {
  SENT = 'SENT',
  RECIEVED = 'RECIEVED',
}

export interface MessageData {
  id: number;
  content: string;
  react?: typeof EMOJIS[number];
  time: Date;
  type: MessageType;
  canReact?: boolean;
}

export interface MessageProps {
  // The content of the message
  message: MessageData;
  // If there is another message of the same type above this one
  hasAbove?: boolean;
  // If there is another message of the same type below this one
  hasBelow?: boolean;
}

/**
 * Renders a message in the chat
 */
export const Message = ({ message, hasAbove, hasBelow }: MessageProps) => {
  const ctx = useGame();
  const [showReacts, setShowReacts] = useState(false);

  const currentReact = message.react;

  return (
    <Stack
      direction={message.type === MessageType.RECIEVED ? 'row' : 'row-reverse'}
      sx={{
        pt: !hasAbove ? 0.5 : undefined,
        pb: currentReact ? 2.5 : !hasBelow ? 0.5 : undefined,
        ['&:hover  #react-button']: {
          display: 'inline-flex',
        },
      }}
    >
      <Tooltip
        title={message.time.toLocaleString(undefined, {
          hour: 'numeric',
          minute: 'numeric',
          weekday: 'short',
        })}
      >
        <Box
          sx={{
            borderRadius: 6,
            py: 1,
            px: 1.5,

            borderBottomLeftRadius:
              hasBelow && message.type === MessageType.RECIEVED ? 4 : undefined,

            borderTopLeftRadius:
              hasAbove && message.type === MessageType.RECIEVED ? 4 : undefined,
            borderBottomRightRadius:
              hasBelow && message.type === MessageType.SENT ? 4 : undefined,
            borderTopRightRadius:
              hasAbove && message.type === MessageType.SENT ? 4 : undefined,
            bgcolor:
              message.type === MessageType.RECIEVED
                ? 'grey.300'
                : 'secondary.main',
            color:
              message.type === MessageType.RECIEVED
                ? message.canReact
                  ? 'text.primary'
                  : 'text.secondary'
                : 'common.white',
            maxWidth: `${ctx.controls.messageSize * 40}px`,
            position: 'relative',
          }}
        >
          {message.content}
          {/* Show the react */}
          {message.react && (
            <Box
              sx={{
                position: 'absolute',
                right: 0,
                borderWidth: 4,
                borderStyle: 'solid',
                borderColor: 'grey.50',
                fontSize: 12,
                bgcolor: 'grey.300',
                px: 0.75,
                py: 0.25,
                borderRadius: 4,
              }}
            >
              {message.react}
            </Box>
          )}
        </Box>
      </Tooltip>
      <Stack direction={'row'} sx={{ width: 64, px: 1 }} alignItems='center'>
        <ReactButton messageId={message.id} />
      </Stack>
    </Stack>
  );
};
