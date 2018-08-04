import React, { Fragment } from 'react';
import {Grid, Paper, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, } from '@material-ui/core';
import {Delete, Edit} from '@material-ui/icons';
import Form from './Form';

const styles = {
  Paper: { padding: 20, marginLeft: 0, marginRight: 0, marginTop: 5, marginBottom: 0, height: 500, overflow: 'auto'}
}
export default ({
  exercises,
  category,
  categories,
  onSelect,
  exercise,
  exercise: {
    id,
    title = 'Welcome',
    description = 'Please select an exercise from the list on the left.'},
  onDelete,
  onSelectEdit,
  editMode,
  onEdit,
  onEditToggle}) => {

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
              key={id}
              categories={categories}
              onSubmit={onEdit}
              exercise={exercise}
              onToggle={onEditToggle}/>
          : <Fragment>
            <Typography variant="display1" gutterBottom>
              {title}
            </Typography>
            <Typography variant="subheading">
              {description}
            </Typography>
          </Fragment>}
      </Paper>
      </Grid>
    </Grid>
  )
}
