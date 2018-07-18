import React, { Fragment, Component } from 'react';
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button} from '@material-ui/core';
//import AddCircle from '@material-ui/icons/AddCircle';
import AddIcon from '@material-ui/icons/Add';

class Create extends Component {
  state = {
    open: false
  }
  
  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }
  
  render () {
    const { open } = this.state
    
    return (
      <Fragment>
        <Button variant="fab" mini onClick={this.handleToggle}>
            < AddIcon />            
        </Button>
        <Dialog
          open={open}
          onClose={this.handleToggle}
          
        >
          <DialogTitle id="form-dialog-title">Add a New Exercise</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below
            </DialogContentText>
            <form>
                
            </form>
          </DialogContent>
          <DialogActions>
            <Button color="primary" variant="raised" onClick={this.handleToggle}>
              Cancel
            </Button>
            <Button color="primary" variant="raised">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      
    </Fragment>
    )
  }
  
}

export default Create;
