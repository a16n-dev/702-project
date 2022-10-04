import { Box, Button, Divider, Grid, Stack, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
import { names } from '../../common/names';
import { Variable } from '../../common/variables';
import { useGame } from '../../hooks/useGameState';
import { ConvoList } from './messaging/ConvoList';
import { ConvoListItem } from './messaging/ConvoListItem';
import { MessageBottomBar } from './messaging/MessageBottomBar';
import { MessageDisplay } from './messaging/MessageDisplay';
import { MessageHeader } from './messaging/MessageHeader';

const getDataIdOrParent = (e: any): string | undefined => {
  if (e.dataset.clickTargetId) {
    return e.dataset.clickTargetId;
  } else if (e.parentElement) {
    return getDataIdOrParent(e.parentElement);
  }
};

/**
 * Fake messaging UI
 */
export const Game = () => {
  const { chats, activeChatId, goToChat, inProgress, controls, logClickEvent } =
    useGame();

  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: any) => {
    let bounds = containerRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const id = getDataIdOrParent(e.target);

    logClickEvent({
      xPos: Math.round(e.clientX - bounds.left),
      yPos: Math.round(e.clientY - bounds.top),
      timestamp: e.timeStamp,
      targetId: id,
      controls,
    });
    // Do stuff with the click
  };

  return (
    <Grid
      ref={containerRef}
      container
      sx={{ flexGrow: 1 }}
      onClick={handleClick}
    >
      <Grid item xs={3.5}>
        <ConvoList>
          {Object.entries(chats).map(([id, chat]) => (
            <ConvoListItem key={id} id={Number(id)} />
          ))}
        </ConvoList>
      </Grid>
      <Divider orientation='vertical' flexItem />
      <Grid item xs>
        <Stack sx={{ height: '100%' }}>
          <MessageHeader />
          <Divider />
          <MessageDisplay />
          <Divider />
          <MessageBottomBar />
        </Stack>
      </Grid>
    </Grid>
  );
};
