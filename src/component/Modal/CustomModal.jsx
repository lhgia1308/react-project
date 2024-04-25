import { Button } from '@mui/material'
import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const CustomModal = (props) => {
  const { open, title, setOpenConfirmation, handleAccept } = props;
  const handleCloseModal = () => {
    setOpenConfirmation(false)
  }
  return (
    <div>
      <React.Fragment>
        <Dialog
          open={open}
          onClose={handleCloseModal}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          fullWidth
        >
          <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
          <DialogContent>
            <DialogContentText sx={{fontSize: "1.25rem"}} 
            id="alert-dialog-description">{props.children}</DialogContentText>
          </DialogContent>
          <DialogActions className='gap-10'>
            <Button variant='outlined' onClick={handleCloseModal}>Cancel</Button>
            <Button variant='contained' onClick={handleAccept} autoFocus>Agree</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </div>
  )
}