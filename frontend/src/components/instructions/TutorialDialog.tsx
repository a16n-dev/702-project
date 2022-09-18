import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';
import { AsyncDialogProps } from 'react-dialog-async';
import DialogHeader from '../layout/DialogHeader';
import { Tutorial } from './Tutorial';

/**
 * Shows the game tutorial in a dialog form that can be viewed at any time
 */
export const TutorialDialog = ({ handleClose, open }: AsyncDialogProps) => {
  return (
    <Dialog open={open} onClose={() => handleClose()} maxWidth='md'>
      <DialogHeader onClose={() => handleClose()}>Instructions</DialogHeader>
      <DialogContent>
        <Tutorial />
      </DialogContent>
      <DialogActions>
        <Button variant='contained' onClick={() => handleClose()}>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};
