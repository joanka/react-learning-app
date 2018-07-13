import React, { Fragment } from 'react';
import {Grid, Paper, Typography, List, ListItem, ListItemText} from '@material-ui/core';

const styles = {
  Paper: {padding: 20, margin: 10, height: 500, overflow: 'auto'}
}
export default ({exercises}) => {
  
  return (
    <Grid container>
      <Grid item sm xs={12}>
      <Paper style={styles.Paper}>
      {exercises.map(([group, exercises]) => 
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
                    >
                      <ListItemText primary={title} />
                    </ListItem>
                  )}
                </List>
          </Fragment>   
        )}
      </Paper>
      </Grid>
      <Grid item sm xs={12}>
      <Paper style={styles.Paper}> Welcome! </Paper>
      </Grid>
    </Grid>
  )
}
