import { faker } from '@faker-js/faker';
import { Stack, Divider, Typography, Box } from '@mui/material';
import { Message, MessageData, MessageType } from './Message';
import { styled } from '@mui/material/styles';
import { MessageDateDivider } from './MessageDateDivider';

const messages: MessageData[] = new Array(15).fill(0).map((_, i) => ({
  content: faker.lorem.words(faker.datatype.number({ min: 3, max: 10 })),
  time: faker.date.recent(3),
  type: faker.helpers.arrayElement(Object.values(MessageType)) as MessageType,
}));

export const MessageDisplay = () => {
  const sortedMessages = messages.sort(
    (a, b) => a.time.getTime() - b.time.getTime()
  );
  return (
    <Stack
      spacing={0.5}
      sx={{ flexBasis: 0, flexGrow: 1, overflowY: 'scroll', px: 1 }}
    >
      {sortedMessages.map((message, i) => (
        <>
          {message.time.getDate() !== sortedMessages[i - 1]?.time.getDate() && (
            <MessageDateDivider date={message.time} />
          )}
          <Message
            key={i}
            message={message}
            hasAbove={sortedMessages[i - 1]?.type === message.type}
            hasBelow={sortedMessages[i + 1]?.type === message.type}
          />
        </>
      ))}
    </Stack>
  );
};
