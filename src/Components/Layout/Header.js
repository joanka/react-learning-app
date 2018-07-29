import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import Dialog from '../Exercises/Dialog';


const Header = ({categories, onExerciseCreate}) => {
  return (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="headline" color="inherit" style={{flex: 1}}>
                Headline
            </Typography>
            <Dialog
                categories={categories}
                onCreate={onExerciseCreate}
            />
        </Toolbar>
      </AppBar>
  )
}

export default Header;
