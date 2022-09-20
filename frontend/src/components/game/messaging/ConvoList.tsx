import {
  Avatar,
  Divider,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SearchIcon from '@mui/icons-material/Search';
import { faker } from '@faker-js/faker';
import { PropsWithChildren } from 'react';

const fakeAvatar = faker.image.avatar();

export const ConvoList = ({ children }: PropsWithChildren) => {
  return (
    <Stack sx={{ height: '100%' }}>
      <Stack spacing={1} sx={{ px: 2, py: 1 }}>
        <Stack direction='row' alignItems='center'>
          <Stack direction='row' alignItems='center' sx={{ flex: '1 1 0' }}>
            <Avatar sx={{ width: 24, height: 24 }} src={fakeAvatar} />
          </Stack>
          <Stack
            direction='row'
            alignItems='center'
            justifyContent='center'
            sx={{ flex: '1 1 0' }}
          >
            <Typography variant='body2'>Chats</Typography>
          </Stack>
          <Stack
            direction='row'
            alignItems='center'
            justifyContent='flex-end'
            sx={{ flex: '1 1 0' }}
            spacing={1}
          >
            <IconButton size='small' color='inherit'>
              <CreateIcon />
            </IconButton>
            <IconButton size='small' color='inherit'>
              <VideoCallIcon />
            </IconButton>
          </Stack>
        </Stack>
        {/* Fake search bar */}
        <Stack
          alignItems='center'
          spacing={1}
          sx={{
            borderRadius: 999,
            bgcolor: 'grey.300',
            px: 1.5,
            py: 1,
            color: 'text.secondary',
          }}
          direction='row'
        >
          <SearchIcon color='inherit' />
          <Typography variant='body2'>Search</Typography>
        </Stack>
      </Stack>
      <Divider flexItem />
      <Stack sx={{ overflowY: 'scroll', flexBasis: 0, flexGrow: 1 }}>
        {/* Flex basis seems to be messing with children size, so wrap it in an extra flex container */}
        <Stack>{children}</Stack>
      </Stack>
    </Stack>
  );
};
