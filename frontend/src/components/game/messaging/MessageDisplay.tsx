import { Box, Stack, Typography } from '@mui/material';
import { Fragment, useLayoutEffect, useRef } from 'react';
import { useGame } from '../../../hooks/useGameState';
import { Message, MessageType } from './Message';
import { MessageDateDivider } from './MessageDateDivider';

export interface MessageDisplayProps {}

/**
 * Displays messages for the active chat
 */
export const MessageDisplay = () => {
  const ctx = useGame();

  const scrollContainerRef = useRef<any>();

  const chat = ctx.chats[ctx.activeChatId];

  useLayoutEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop =
        scrollContainerRef.current.scrollHeight;
    }
  }, [ctx.activeChatId, scrollContainerRef.current?.scrollHeight]);

  const sortedMessages = [
    ...chat.messages,
    {
      id: -1,
      react: chat.currentReact,
      content: `React ${chat.targetReact} to this message`,
      time: chat.messages[chat.messages.length - 1].time,
      type: MessageType.RECIEVED,
      canReact: true,
    },
  ];

  return (
    <Stack
      spacing={0.5}
      ref={scrollContainerRef}
      sx={{
        flexBasis: 0,
        flexGrow: 1,
        overflowY: 'scroll',
        px: 1,
        py: 4,
        bgcolor: 'grey.50',
      }}
    >
      <Typography align='center' color='text.secondary' variant='body2'>
        This is the start of your conversation with {chat.name}
      </Typography>
      {sortedMessages.map((message, i) => (
        <Fragment key={i}>
          {message.time.getDate() !== sortedMessages[i - 1]?.time.getDate() && (
            <MessageDateDivider date={message.time} />
          )}
          <Message
            message={message}
            hasAbove={sortedMessages[i - 1]?.type === message.type}
            hasBelow={sortedMessages[i + 1]?.type === message.type}
          />
        </Fragment>
      ))}
      {/* Last message which has reaction functionality, pass in message and target "correct" emote */}
      {/* <ReactMessage message={message} react={emote} /> */}
      <Box sx={{ height: 100 }} />
    </Stack>
  );
};
