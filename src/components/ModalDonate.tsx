import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeDonate } from 'src/redux/modalDonate';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IDonateForm, ModalAction } from 'src/constants';

export interface IModalProps {
  onActionClick: (action: ModalAction, data: IDonateForm, company: any) => void;
}

export function ModalDonate(props: IModalProps) {
  const amountRef = React.useRef();
  const nicknameRef = React.useRef();
  const openData = useSelector((state: any) => state.donator.open);
  const dispatch = useDispatch();

  const handleClose = (action: ModalAction) => {
    const data: IDonateForm = {
      amount: amountRef?.current?.value,
      nickname: nicknameRef?.current?.value,
    };
    props.onActionClick(action, data, openData);
    dispatch(closeDonate());
  };
  return (
    <Dialog
      open={openData ? true : false}
      onClose={() => handleClose(ModalAction.CANCEL)}
    >
      <DialogTitle>Donate</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To make a donation, please enter your nickname and amount of money
          here
        </DialogContentText>
        <TextField
          inputRef={amountRef}
          autoFocus
          margin="dense"
          id="amount"
          label="amount"
          type="number"
          fullWidth
          variant="standard"
        />
        <TextField
          inputRef={nicknameRef}
          autoFocus
          margin="dense"
          id="nickname"
          label="nickname"
          type="email"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose(ModalAction.CANCEL)}>Cancel</Button>
        <Button onClick={() => handleClose(ModalAction.OK)}>Donate</Button>
      </DialogActions>
    </Dialog>
  );
}
