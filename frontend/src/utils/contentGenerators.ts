import { faker } from '@faker-js/faker';
import { EMOJIS } from '../common/emojis';
import { MessageType } from '../components/game/messaging/Message';
import { GameChat } from '../context/gameContext';

export const generateChats = (n: number) => {
  const chats: { [id: number]: GameChat } = {};

  for (let i = 0; i < n; i++) {
    chats[i] = {
      id: i,
      name: faker.name.firstName(),
      completed: false,
      targetReact: faker.helpers.arrayElement(EMOJIS),
      messages: new Array(faker.datatype.number({ min: 3, max: 25 }))
        .fill(0)
        .map((_, i) => ({
          id: i,
          content: faker.lorem.words(
            faker.datatype.number({ min: 3, max: 10 })
          ),
          time: faker.date.recent(3),
          type: faker.helpers.arrayElement(
            Object.values(MessageType)
          ) as MessageType,
        }))
        .sort((a, b) => a.time.getTime() - b.time.getTime()),
    };
  }

  return chats;
};
