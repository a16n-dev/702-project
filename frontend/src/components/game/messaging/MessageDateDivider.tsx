import { Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  paddingBlock: theme.spacing(1),
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

export interface MessageDateDividerProps {
  date: Date;
}

export const MessageDateDivider = ({ date }: MessageDateDividerProps) => (
  <Root>
    <Divider>{date.toLocaleDateString()}</Divider>
  </Root>
);
