import CloseIcon from '@mui/icons-material/Close';
import {
  DialogTitle,
  DialogTitleProps as MuiDialogTitleProps,
  IconButton,
} from '@mui/material';

export interface DialogTitleProps extends MuiDialogTitleProps {
  onClose?: () => void;
}

/**
 * Dialog header that contains a built in close button. Adapted from the MUI docs
 */
const DialogHeader = (props: DialogTitleProps) => {
  const { children, onClose, sx, ...other } = props;

  return (
    <DialogTitle
      sx={{
        m: 0,
        p: 2,
        position: 'sticky',
        top: 0,
        bgcolor: 'background.default',
        zIndex: 1,
        ...sx,
      }}
      {...other}
    >
      {children}
      {onClose ? (
        <IconButton
          aria-label='close'
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export default DialogHeader;
