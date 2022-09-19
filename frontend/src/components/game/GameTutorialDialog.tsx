import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';
import { AsyncDialogProps } from 'react-dialog-async';
import DialogHeader from '../layout/DialogHeader';

export interface GameTutorialDialogProps {
  content: React.ReactElement;
}

export const GameTutorialDialog = ({
  open,
  data,
  handleClose,
}: AsyncDialogProps<GameTutorialDialogProps>) => {
  return (
    <Dialog maxWidth='md' fullWidth open={open}>
      <DialogHeader>Tutorial</DialogHeader>
      <DialogContent>{data.content}</DialogContent>
      <DialogActions>
        <Button variant='contained' onClick={() => handleClose()}>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};
