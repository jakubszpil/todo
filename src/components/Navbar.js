import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core'
import {Add as AddIcon} from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: '0',
  },
  layout: {
    width: '100%',
    padding: 0,
    maxWidth: 1400,
    margin: '0 auto'
  },
  menuButton: {
    margin: 0
  },
  addButton: {
    margin: '0',
  },
  title: {
    marginLeft: 15,
    flexGrow: 2,
  }
}))

const Navbar = ({ addItem }) => {
  const classes = useStyles()

  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const handleClickOpen = () => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false)
  };



  const handleSubmit = evt => {
    evt.preventDefault()
    setOpen(false)
    addItem({ title, content })
  }
  return (
    <>
      <AppBar position="sticky">
        <Toolbar className={classes.layout}>
          <Typography variant="h6" className={classes.title}>
            Tasky
          </Typography>
          <IconButton className={classes.addButton} color="inherit" aria-label="add" onClick={handleClickOpen}>
            <AddIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Task</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <DialogContentText>
              Don't forget about urgent things! Add todo task to your list
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Enter your task title"
              type="text"
              fullWidth
              required
              onChange={e => setTitle(e.target.value)}
            />
            <TextField
              margin="dense"
              id="content"
              label="Enter your task content"
              type="text"
              fullWidth
              onChange={e => setContent(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button color="primary" type="submit">
              Confirm
            </Button>
          </DialogActions>
        </form>
        
      </Dialog>
    </>
    
  )
}

export default Navbar
