import React, { Fragment } from 'react';
import {Grid, Paper, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, } from '@material-ui/core';
import {Delete, Edit} from '@material-ui/icons';
import Form from './Form';

const styles = {
  Paper: {padding: 20, margin: 10, height: 500, overflow: 'auto'}
}
export default ({
  exercises,
  category,
  categories,
  onSelect,
  exercise,
  exercise: {
    title = 'Welcome',
    description = 'Please select an exercise from the list on the left.'},
  onDelete,
  onSelectEdit,
  editMode,
  onEdit}) => {

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
                        <IconButton onClick={() => onSelectEdit(id)}>
                          <Edit />
                        </IconButton>
                        <IconButton onClick={() => onDelete(id)}>
                          <Delete />
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
        {editMode
          ? <Form
              categories={categories}
              onSubmit={onEdit}
              exercise={exercise}/>
        : <Fragment>
            <Typography variant="display1">
              {title}
            </Typography>
            <Typography variant="subheading" style={{marginTop: 15}}>
              {description}
            </Typography>
          </Fragment>}
      </Paper>
      </Grid>
    </Grid>
  )
}
