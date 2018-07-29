import React, { Fragment, Component } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Form from './Form';

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
    const { open } = this.state,
          { categories } = this.props

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
            <Form categories={categories}/>
          </DialogContent>
          <DialogActions>
            <Button color="primary" variant="raised" onClick={this.handleToggle}>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>

    </Fragment>
    )
  }

}

export default Create;
