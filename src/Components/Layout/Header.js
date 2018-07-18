import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import Create from '../Exercises/Dialogs/Create';


const Header = () => {
  return (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="headline" color="inherit" style={{flex: 1}}>
                Headline
            </Typography>
            <Create/>
        </Toolbar>
      </AppBar>
  )
}

export default Header;
