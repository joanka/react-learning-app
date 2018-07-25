import React, { Fragment } from 'react';
import {Grid, Paper, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
  Paper: {padding: 20, margin: 10, height: 500, overflow: 'auto'}
}
export default ({exercises, category, onSelect, exercise: {title = 'Welcome', description = 'Please select an exercise from the list on the left.'}, onDelete}) => {
  
  return (
    <Grid container>
      <Grid item sm xs={12}>
      <Paper style={styles.Paper}>
      {exercises.map(([group, exercises]) => 
        !category || category === group ?
          <Fragment key={group}>
            <Typography 
            variant="headline"
            style={{textTransform: "capitalize"}}>
            {group}
            </Typography>
            <List component="ul">
                  {exercises.map(({id, title}) =>
                    <ListItem
                      key={id}
                      button
                      onClick={() => onSelect(id)}
                    >
                      <ListItemText 
                      primary={title}/>
                      <ListItemSecondaryAction>
                        <IconButton onClick={() => onDelete(id)}>
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  )}
                </List>
          </Fragment> 
          : null  
        )}
      </Paper>
      </Grid>
      <Grid item sm xs={12}>
      <Paper style={styles.Paper}>
        <Typography variant="display1">
            {title}
        </Typography>
        <Typography variant="subheading" style={{marginTop: 15}}>
            {description}
        </Typography>
      </Paper>
      </Grid>
    </Grid>
  )
}
