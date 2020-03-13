import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Checkbox,
  IconButton
} from '@material-ui/core'
import { Delete as DeleteIcon } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    maxWidth: 900,
    margin: '0 auto'
  },
  item: {
    width: '100%',
    padding: '5px 15px'
  }
}));

const TodoList = ({ todos, toggleItem, deleteItem }) => {
  const classes = useStyles();
  
  return (
    <List className={classes.root}>
      {todos.map((item, key) => {
        const labelId = `checkbox-list-label-${item.id}`
        return (
          <ListItem key={key} role={undefined} className={classes.item} dense button onClick={() => toggleItem(item.id)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={item.completed}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={item.title} secondary={item.content} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => deleteItem(item.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  )
}

export default TodoList