import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import Create from '../Exercises/Dialogs/Create';


const Header = ({categories, onExerciseCreate}) => {
  return (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="headline" color="inherit" style={{flex: 1}}>
                Headline
            </Typography>
            <Create
                categories={categories}
                onCreate={onExerciseCreate}
            />
        </Toolbar>
      </AppBar>
  )
}

export default Header;
