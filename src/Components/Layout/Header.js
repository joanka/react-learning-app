import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';


const Header = () => {
  return (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="headline" color="inherit">
                Headline
            </Typography>
        </Toolbar>
      </AppBar>
  )
}

export default Header;
