import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Tooltip,
} from '@mui/material';
import { useDialog } from 'react-dialog-async';
import { TutorialDialog } from '../instructions/TutorialDialog';
import HelpIcon from '@mui/icons-material/Help';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

/**
 * Header that is displayed at the top of the app on every page. It allows the user
 * to go back to the homepage, or view the tutorial, at any time
 */
export const Header = () => {
  const tutorialDialog = useDialog(TutorialDialog);

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Typography>Hello!</Typography>
        <Box sx={{ flexGrow: 1 }} />
        {/* <Tooltip title='Go to Start'>
          <IconButton
            color='inherit'
            aria-label='Go to Start'
            component={Link}
            to='/'
          >
            <HomeIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title='Show Tutorial'>
          <IconButton
            color='inherit'
            aria-label='Show Tutorial'
            onClick={() => tutorialDialog.show()}
          >
            <HelpIcon />
          </IconButton>
        </Tooltip> */}
      </Toolbar>
    </AppBar>
  );
};
