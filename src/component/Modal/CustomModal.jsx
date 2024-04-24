import { Button } from '@mui/material'
import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const CustomModal = (props) => {
  console.log('props', props)
  const { open, title, content, setOpenConfirmation, handleLogout } = props;
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
            <DialogContentText id="alert-dialog-description">{content}</DialogContentText>
          </DialogContent>
          <DialogActions className='gap-10'>
            <Button variant='outlined' onClick={handleCloseModal}>Cancel</Button>
            <Button variant='contained' onClick={handleLogout} autoFocus>Agree</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </div>
  )
}