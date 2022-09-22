import { Box, Stack, Tooltip } from '@mui/material';
import { useGame } from '../../../hooks/useGameState';

export enum MessageType {
  SENT = 'SENT',
  RECIEVED = 'RECIEVED',
}

export interface MessageData {
  content: string;
  time: Date;
  type: MessageType;
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

  return (
    <Stack
      direction={message.type === MessageType.RECIEVED ? 'row' : 'row-reverse'}
      sx={{
        pt: !hasAbove ? 0.5 : undefined,
        pb: !hasBelow ? 0.5 : undefined,
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
                ? 'text.primary'
                : 'common.white',
            maxWidth: 450,
            height: `${ctx.controls.messageSize * 5}px`,
            width: `${ctx.controls.messageSize * 40}px`,
          }}
        >
          {message.content}
        </Box>
      </Tooltip>
      <Stack sx={{ width: 64 }} />
    </Stack>
  );
};
